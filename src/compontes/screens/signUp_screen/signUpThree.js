import logo from "../../../assents/img/hello_logo.svg";

import Input from "../formComponents/Input";
import Button from "../formComponents/Button";

import "../../../assents/style/output.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FormContext } from "../../../context/FormContext";

const SignUpThree = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    FetchCreate('http://localhost:5000/Users', 'POST', formData);
    navigate("/");
  };

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    formatedDate(e);
  };

  const formatedDate = (e) => {
    const { name, value } = e.target;

    if (name === "date" && value) {
      const formatedDate = value.split("-").reverse().join("/");
      setFormData({ ...formData, [name]: formatedDate });
    }
  };

  const handleClick = (e) => {
    if (e.target.checked) {
      console.log("Clicado");
    } else {
      console.log("Não clicado");
    }
  };

  const FetchCreate = (url, method, data) => {
    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col gap-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-3/12 max-sm:w-11/12 sm:w-11/12 md:w-3/5">
      <img src={logo} alt="logo" className="w-20 text-center" />

      <form
        onSubmit={submit}
        className="flex flex-col gap-5 justify-between border shadow p-3"
      >
        <h1 className="text-2xl font-medium">SignUp</h1>
        <p>Crie sua conta e aproveite todos os nossos recursos.</p>

        <div className="flex flex-col gap-3">
          <label htmlFor="date" className="font-medium">
            Data de aniversário
          </label>
          <Input
            type="date"
            name="date"
            id="date"
            handleOnchange={handleOnchange}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="number" className="font-medium">
            Telefone
          </label>
          <Input
            type="number"
            name="number"
            id="number"
            handleOnchange={handleOnchange}
          />
        </div>

        <div className="flex gap-2">
          <input type="checkbox" onClick={handleClick} required />
          <span className="text-xs ">
            Eu concordo com todos os termos e condições
          </span>
        </div>

        <Button
          text="SignUp"
          name="signUpButton"
          id="signUpButton"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUpThree;
