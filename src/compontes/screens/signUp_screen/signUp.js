import { FormProvider } from "../../../context/FormContext";

import SignUpOne from "./signUpOne";
import SignUpTwo from "./signUpTwo";
import SignUpThree from "./signUpThree";

import "../../../assents/style/output.css";
import { Routes, Route } from "react-router-dom";

const SignUp = () => {

  return (
  <FormProvider>
    <Routes>
      <Route path="/" element={<SignUpOne />} />
      <Route path="step2" element={<SignUpTwo />} />
      <Route path="step3" element={<SignUpThree />} />
    </Routes>
  </FormProvider>
  );
};

export default SignUp;
