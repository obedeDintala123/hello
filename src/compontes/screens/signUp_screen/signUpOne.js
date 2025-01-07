import { useNavigate } from "react-router-dom";

import logo from "../../../assents/img/hello_logo.svg";

import Button from "../formComponents/Button";
const SignUpOne = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-3/12 flex flex-col gap-10 justify-between  max-sm:w-11/12 sm:w-11/12 md:w-3/5">
      <img src={logo} alt="Hello Logo" className="w-20 text-center" />
      <div className="flex flex-col gap-5 border shadow p-3">
        <h1 className="text-2xl font-medium">SignUp</h1>
        <p>Crie sua conta e aproveite todos os nossos recursos.</p>
        <Button
          type="submit"
          text="Começar"
          name="buttonComecar"
          id="buttonComecar"
          onClick={() => navigate("step2")}
        />
      </div>
    </div>
  );
};

export default SignUpOne;
