import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import logo from "../../assents/img/hello_logo.svg";

import Input from "./formComponents/Input";
import Button from "./formComponents/Button";
const SignIn = () => {

  const [signInData, setSignInData] = useState([]);
  const [users, setUsers] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    console.log(signInData);
  } 

  const handleOnchange = (e) => {
    setSignInData({...signInData, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    fetch("http://localhost:5000/Users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error(error))
  }, []);

  return (
    <form onSubmit={submit} method="POST" className="lg:w-3/12 flex flex-col gap-6 justify-between p-3 border shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:w-11/12 sm:w-11/12 md:w-3/5">
      <div className="flex flex-col gap-6">
        <img src={logo} alt="logo" className="w-20 text-center" />
        <h1 className="text-2xl font-medium">Sign In</h1>
        <span className="text-sm">Faça login para acessar sua conta</span>
      </div>
      <div className="flex flex-col gap-6">
        <Input
          type="email"
          placeholder="Número de Telefone ou E-mail"
          name="email"
          id="email"
          handleOnchange={handleOnchange}
        />
        <Input type="password" placeholder="Senha" name="password" id="password"  handleOnchange={handleOnchange}/>
        <Button
          type="submit"
          text="Sign In"
          name="signInButton"
          id="signInButton"
        />
      </div>

      <p className="text-sm">
        Não possue uma conta?{" "}
        <Link to="/signUp" className="underline font-medium">
          Sign Up
        </Link>
      </p>

      {users ? (
        <div>
          <h1>Usuários</h1>
          <ul>
            {users.find((user) => user.email === signInData.email && user.password === signInData.password) ? (
              <li>Usuário encontrado</li>
            ) : (
              <li>Usuário não encontrado</li>
            )}
          </ul>
        </div>
      ) : (
        null
      )}
    </form>
  );
};

export default SignIn;
