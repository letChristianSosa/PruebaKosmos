const SelectField = ({ label, action, text }) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl flex justify-between">
      <div className="flex flex-col">
        <label>{label} Field</label>
        <select type="select" placeholder={label}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <button onClick={action} className="bg-slate-400">
        {text}
      </button>
    </div>
  );
};

export default SelectField;
