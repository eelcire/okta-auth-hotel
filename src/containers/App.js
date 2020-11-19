import React, { Component } from "react";
import "../assets/styles/css/index.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/SingleRoom";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import LoginCallback from "../components/LoginCallback";

import { OktaAuth } from "@okta/okta-auth-js";
import config from "../config";

export const authClient = new OktaAuth(config.oidc);

class App extends Component {
  state = {
    accessToken: "",
    idToken: "",
    authenticated: false,
    claims: undefined,
  };

  componentDidMount() {
    authClient.tokenManager
      .get("accessToken")
      .then((res) => this.setState({ accessToken: res.value }))
      .catch((err) => console.log(err));
    authClient.tokenManager
      .get("idToken")
      .then((res) => {
        authClient.token
          .verify(res)
          .then(() => {
            this.setState({
              claims: res.claims,
              idToken: res.value,
              authenticated: true,
            });
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              accessToken: "",
              idToken: "",
              authenticated: false,
              claims: undefined,
            });
          });
      })
      .catch((err) => {
        this.setState({
          accessToken: "",
          idToken: "",
          authenticated: false,
          claims: undefined,
        });
        console.log(err);
      });
  }

  login() {
    authClient.token.getWithRedirect();
    // .then((res) => {
    //   authClient.tokenManager.add("accessToken", res.tokens.accessToken);
    //   authClient.tokenManager.add("idToken", res.tokens.idToken);
    //   window.location.reload();
    // })
    // .catch((err) => console.log(err));
  }

  logout(state) {
    state.authenticated = false;
    authClient.signOut();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Navbar2 logout={this.logout} login={this.login} state={this.state} />
        <Switch>
          <Route exact path="/" render={() => <Home state={this.state} />} />
          <Route
            exact
            path="/profile"
            render={() => <Profile state={this.state} />}
          />
          <Route exact path="/rooms/" component={Rooms} />
          <Route path="/implicit/callback" component={LoginCallback} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={ErrorPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
