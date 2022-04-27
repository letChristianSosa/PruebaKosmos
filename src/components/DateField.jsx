import Button from "./Button";

const DateField = ({ label, action, text }) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl flex justify-between">
      <div className="flex flex-col">
        <label className="font-bold uppercase">{label} Field</label>
        <input type="date" className="border-2 rounded-md p-1 mt-1 w-80" />
      </div>
      <Button onClick={action} text={text} />
    </div>
  );
};

export default DateField;
