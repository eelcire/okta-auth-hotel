import React, { useEffect } from "react";
import Cover from "../components/Cover";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = (props) => {
  return (
    <React.Fragment>
      <Cover>
        {!props.state.authenticated ? (
          <Banner title="Login for Info!" subtitle="Click Login Above" />
        ) : (
          <Banner title="User Info!">
            {Object.keys(props.state.claims).map((key) => {
              return (
                <p>
                  {key}: {props.state.claims[key]}
                </p>
              );
            })}
          </Banner>
        )}
      </Cover>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
