import React from "react";
import StyledFirebaseAuth from "react-firebaseui-pro";
import firebase from "./firebase";
import { auth } from "./firebase";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,  // prevents redirect
  },
};

export function LogIn() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Log In / Register</h2>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}