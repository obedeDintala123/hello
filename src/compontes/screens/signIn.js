import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assents/img/hello_logo.svg";

import Input from "./formComponents/Input";
import Button from "./formComponents/Button";
import Message from "../modal/Message";
import Loader from "../modal/Loader";
const SignIn = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (signInData.email && signInData.password) {
      fetch("http://localhost/hello-Backend/ReadUser.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInData.email,
          password: signInData.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.message);
          if (data.UserState) {
            setLoading(false);
            setUsers(data.user); 
            navigate("/feed");
          }
          else {
            setLoading(false);
            setShowModal(true);
            setTimeout(() => {
              setShowModal(false);
            }, 2500);
          }
        })
        .catch((error) => console.error("Erro ao fazer login:", error));
    } else {
      setMessage("Preencha todos os campos.");
    }
  };

  const handleOnchange = (e) => {
    setSignInData({...signInData, [e.target.name]: e.target.value});
  }

  return (
    <>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center">
    {loading && <Loader />}
    </div>
    {showModal && <Message message={message} />}
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
          text={loading ? "Processando..." : "Sign In"}
          name="signInButton"
          id="signInButton"
          disabled={true}
        />
      </div>

      <p className="text-sm">
        Não possue uma conta?{" "}
        <Link to="/signUp" className="underline font-medium">
          Sign Up
        </Link>
      </p>

      {users && (
        <div>
          <h1>Usuário Logado:</h1>
          <ul>
            <li>{users.nome}</li>
            <li>{users.email}</li>
            <li>{users.numero}</li>
          </ul>
        </div>
      )}
    </form>
    </>
  );
};

export default SignIn;
