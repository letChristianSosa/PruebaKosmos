import TextField from "./TextField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import DateField from "./DateField";

const Form = ({ selectedFields, removeField }) => {
  return (
    <div className="bg-indigo-300 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl">
      <h2 className="uppercase text-center text-3xl mb-4 bg-white rounded-md p-2">
        Selected Fields
      </h2>
      <div className="p-1">
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
            case "date":
              return (
                <DateField
                  key={`list_${field._uid}`}
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
