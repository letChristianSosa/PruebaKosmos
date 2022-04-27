const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className=" bg-slate-400 hover:bg-slate-600 px-7 rounded-md uppercase font-bold text-white"
    >
      {text}
    </button>
  );
};

export default Button;
