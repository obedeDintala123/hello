import logo from '../../assents/img/hello_logo.svg';

import Input from './formComponents/Input';
import Button from './formComponents/Button';
const SignIn = () => {
    return (
     
            <form className='lg:w-4/12 flex flex-col gap-6 justify-between p-6 border shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:w-11/12 sm:w-11/12 md:w-3/5'>
            <div className='flex flex-col gap-6'>
                <img src={logo} alt='logo' className='w-20 text-center'/>
                <h1 className='text-2xl font-medium'>Sign In</h1>
                <span className='text-sm'>Faça login para acessar sua conta</span>
            </div>
          <div className='flex flex-col gap-6'>
          <Input type="email" placeholder="Número de Telefone ou E-mail" name="email" id="email"/>
           <Input type="password" placeholder="Senha" name="senha" id="senha" />
            <Button type="submit" text="Sign In" name="signInButton" id="signInButton" />
          </div>
            <p className='text-xs'>Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>
      
    )
}

export default SignIn;