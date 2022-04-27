import TextField from "./TextField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

const Form = ({ selectedFields, removeField }) => {
  return (
    <div className="bg-lime-400 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl">
      <h2 className="text-center text-xl mb-4">Selected Fields</h2>
      <div className="bg-red-400 p-1">
        {/* {selectedFields.map((field) => (
          <div
            key={`selected_${field._uid}`}
            className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl"
          >
            <label>{field.label}</label>
            <input type={field.type} placeholder={field.label} />
            <button onClick={() => removeField(field)}>Remove Field</button>
          </div>
        ))} */}
        {selectedFields.map((field) => {
          const { component } = field;
          switch (component) {
            case "text":
              return (
                <TextField
                  key={`selected_${field._uid}`}
                  label={field.label}
                  action={() => removeField(field)}
                  text="Remove"
                />
              );
            case "select":
              return (
                <SelectField
                  key={`selected_${field._uid}`}
                  label={field.label}
                  action={() => removeField(field)}
                  text="Remove"
                />
              );
            case "radio":
              return (
                <RadioField
                  key={`selected_${field._uid}`}
                  label={field.label}
                  action={() => removeField(field)}
                  text="Remove"
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

export default Form;
