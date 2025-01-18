import "../../../assents/style/output.css";

const Button = ({ text, type, id, name, onClick, state }) => {
  return (
    <button
      className="p-2 bg-[#F4F440] rounded font-medium w-full"
      type={type}
      id={id}
      name={name}
      onClick={onClick}
      disabled={state}
    >
      {text}
    </button>
  );
};

export default Button;
