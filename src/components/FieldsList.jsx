import TextField from "./TextField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import DateField from "./DateField";

const FieldsList = ({ selectField, fields }) => {
  return (
    <div className=" bg-indigo-300 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl">
      <h2 className="uppercase text-center text-3xl mb-4 bg-white rounded-md p-2">
        Select your Fields
      </h2>
      <div className="p-1">
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
            case "date":
              return (
                <DateField
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
