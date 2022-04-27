import Button from "./Button";

const SelectField = ({ label, action, text }) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl flex justify-between">
      <div className="flex flex-col">
        <label className="font-bold uppercase">{label} Field</label>
        <select type="select" className="border-2 rounded-md p-1 mt-1 w-80">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
      </div>
      <Button onClick={action} text={text} />
    </div>
  );
};

export default SelectField;
