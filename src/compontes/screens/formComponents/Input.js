import '../../../assents/style/output.css';
const Input = ({type, placeholder, name, id}) => {
    return <input className='w-full outline-none bg-[#F2F4F7] p-3 rounded' type={type} placeholder={placeholder} name={name} id={id} />
}

export default Input;