import '../../../assents/style/output.css';
const Input = ({type, placeholder, name, id, handleOnchange, value}) => {

    return  <input onChange={handleOnchange} className='w-full outline-none bg-[#F2F4F7] p-2 rounded' type={type} placeholder={placeholder} name={name} id={id} value={value}required/>
    
}

export default Input;