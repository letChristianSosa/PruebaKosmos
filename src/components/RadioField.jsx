const RadioField = ({ label, action, text }) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl flex justify-between">
      <div className="flex flex-col">
        <label>{label} Field</label>
        <div className="flex justify-between">
          <div>
            <input type="radio" id="1" name="radio_field" />
            <label htmlFor="1">Option 1</label>
          </div>
          <div>
            <input type="radio" id="2" name="radio_field" />
            <label htmlFor="2">Option 2</label>
          </div>
          <div>
            <input type="radio" id="3" name="radio_field" />
            <label htmlFor="3">Option 3</label>
          </div>
        </div>
      </div>
      <button onClick={action} className="bg-slate-400">
        {text}
      </button>
    </div>
  );
};

export default RadioField;
