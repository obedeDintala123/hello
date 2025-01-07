import logo from "../../../assents/img/hello_logo.svg";

import Input from "../formComponents/Input";
import Button from "../formComponents/Button";
import Loader from '../../modal/Loader';

import "../../../assents/style/output.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FormContext } from "../../../context/FormContext";

const SignUpThree = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      FetchCreate('http://localhost/hello-Backend/CreateUser.php', 'POST', formData);
    }, 1000)
  };

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      body: JSON.stringify({nome: data.nome, email: data.email, password: data.password, date: data.date, number: data.number})
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.UserState) {
          setLoading(false);
          navigate("/feed");
        }
        else {
          setLoading(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (

    <div className="flex flex-col gap-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-3/12 max-sm:w-11/12 sm:w-11/12 md:w-3/5">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
    {loading && <Loader />}
    </div>

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
