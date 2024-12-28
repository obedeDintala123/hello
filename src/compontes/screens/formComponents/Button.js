import '../../../assents/style/output.css'
const Button = ({text, type, id, name}) => {
    return <button className='p-3 bg-[#F4F440] rounded font-medium' type={type} id={id} name={name}>{text}</button>
}

export default Button;