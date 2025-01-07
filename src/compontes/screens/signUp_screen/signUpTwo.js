import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../../context/FormContext';

import logo from '../../../assents/img/hello_logo.svg';

import Input from "../formComponents/Input";
import Button from "../formComponents/Button";

import '../../../assents/style/output.css'

const SignUpTwo = () => {
    const navigate = useNavigate();
    const {formData, setFormData} = useContext(FormContext);

    const submit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/signUp/step3');
    }
  
    const handleOnchange = (e) => {
     setFormData({...formData, [e.target.name]: e.target.value});
    }


return (
    <div className='flex flex-col gap-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-3/12 max-sm:w-11/12 sm:w-11/12 md:w-3/5'>
    <img src={logo} alt='logo' className='w-20 text-center'/>
    <form onSubmit={submit} method="POST" className='flex flex-col gap-5 justify-between border shadow p-3' name='form' id='form'>
        <h1 className='text-2xl font-medium'>SignUp</h1>
        <p>Crie sua conta e aproveite todos os nossos recursos.</p>
        <Input type="text" placeholder="Nome" name="nome" id="nome" handleOnchange={handleOnchange}/>
        <Input type="email" placeholder="E-mail" name="email" id="email" handleOnchange={handleOnchange}/>
        <Input type="password" placeholder="Senha" name="password" id="password" handleOnchange={handleOnchange}/>
        <Button type="submit" name="buttonSeguir" id="buttonSeguir" text="A seguir" />
    </form>
    </div>
)
}

export default SignUpTwo;