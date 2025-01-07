import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./compontes/screens/signIn";
import SignUp from "./compontes/screens/signUp_screen/signUp";

import SignUpOne from "./compontes/screens/signUp_screen/signUpOne";
import SignUpTwo from "./compontes/screens/signUp_screen/signUpTwo";
import SignUpThree from "./compontes/screens/signUp_screen/signUpThree";

import Feed from "./compontes/pages/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <SignIn /> },
      {
        path: "signUp",
        element: <SignUp />,
        children: [
          { path: "", element: <SignUpOne /> },
          { path: "step2", element: <SignUpTwo /> },
          { path: "step3", element: <SignUpThree /> }
        ]
      }
    ]
  },
  {
    path: "/feed",
    element: <Feed />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
