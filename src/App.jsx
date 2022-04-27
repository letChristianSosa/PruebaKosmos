import { useState } from "react";
import FieldsList from "./components/FieldsList";
import Form from "./components/Form";
import Fields from "./fields.json";

function App() {
  const [selectedFields, setSelectedFields] = useState([]);

  const selectField = (field) => {
    for (let i = 0; i < selectedFields.length; i++) {
      if (selectedFields[i] === field) {
        return;
      }
    }
    let newFields = [...selectedFields, field];
    setSelectedFields(newFields);
  };

  const removeField = (field) => {
    let newFields = [];
    for (let i = 0; i < selectedFields.length; i++) {
      if (selectedFields[i] !== field) {
        newFields.push(selectedFields[i]);
      }
    }
    setSelectedFields(newFields);
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="mt-5 p-2 text-5xl w-1/2 mx-auto text-center mb-4 uppercase bg-white rounded-md">
          Kosmos Test
        </h1>
        <div className="md:grid md:grid-cols-2 mt-12 gap-10">
          <FieldsList fields={Fields} selectField={selectField} />
          <Form selectedFields={selectedFields} removeField={removeField} />
        </div>
      </div>
    </div>
  );
}

export default App;
