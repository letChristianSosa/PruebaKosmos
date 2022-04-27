import TextField from "./TextField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

const FieldsList = ({ selectField, fields }) => {
  return (
    <div className="bg-orange-200 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl">
      <h2 className="text-center text-xl mb-4">Select your Fields</h2>
      <div className="bg-red-400 p-1">
        {/* {fields.map((field) => (
          <div
            key={`list_${field._uid}`}
            className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl flex justify-between"
          >
            <div className="flex flex-col">
              <label>{field.label}</label>
              <input type={field.type} placeholder={field.label} />
            </div>
            <button onClick={() => selectField(field)} className="bg-slate-400">
              Add Field
            </button>
          </div>
        ))} */}

        {fields.map((field) => {
          const { component } = field;
          switch (component) {
            case "text":
              return (
                <TextField
                  key={`list_${field._uid}`}
                  label={field.label}
                  action={() => selectField(field)}
                  text="Add"
                />
              );
            case "select":
              return (
                <SelectField
                  key={`list_${field._uid}`}
                  label={field.label}
                  action={() => selectField(field)}
                  text="Add"
                />
              );
            case "radio":
              return (
                <RadioField
                  key={`list_${field._uid}`}
                  label={field.label}
                  action={() => selectField(field)}
                  text="Add"
                />
              );
            default:
              return;
          }
        })}
      </div>
    </div>
  );
};

export default FieldsList;
