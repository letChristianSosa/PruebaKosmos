const TextField = ({ label, action, text }) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl flex justify-between">
      <div className="flex flex-col">
        <label>{label} Field</label>
        <input type="text" placeholder={label} />
      </div>
      <button onClick={action} className="bg-slate-400">
        {text}
      </button>
    </div>
  );
};

export default TextField;
