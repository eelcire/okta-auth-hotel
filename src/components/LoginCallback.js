import React, { useEffect } from "react";
import { authClient } from "../containers/App";

const LoginCallback = () => {
  useEffect(() => {
    authClient.token.parseFromUrl().then((res) => {
      console.log(res.accessToken);
      authClient.tokenManager.add("accessToken", res.tokens.accessToken);
      authClient.tokenManager.add("idToken", res.tokens.idToken);
      //   localStorage.setItem(
      //     "access_token",
      //     "Bearer " + res.tokens.accessToken.value
      //   );
      //   localStorage.setItem("idToken", JSON.stringify(res.tokens.idToken));
      //window.location.assign("http://localhost:3000/home");
      window.location.assign("http://localhost:3000");
    });
  }, []);
  return <div></div>;
};

export default LoginCallback;
