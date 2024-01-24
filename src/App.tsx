import React from "react";
import Data from "./utils/data";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import { useForm } from "./context/FormContext";
import { useData } from "./context/DataContext";

function App() {
  const { data } = useData();

  const { showForm, setShowForm } = useForm();

  function handleAdd() {
    setShowForm(!showForm);
  }

  return (
    <div className="bg-black p-10">
      {showForm ? (
        <ItemForm />
      ) : (
        <>
          <div className="flex items-center justify-center">
            <h1 className="text-white">Details</h1>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center">
            {data.length !== 0 ? (
              <>
                {data.map((item: Data) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    data={item.data}
                  />
                ))}
              </>
            ) : (
              <>
                <p className="text-white">No data present!</p>
              </>
            )}
          </div>
          <div>
            <button
              className="bg-green-900 text-white p-3 rounded-sm"
              onClick={() => {
                handleAdd();
              }}
            >
              Add
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
