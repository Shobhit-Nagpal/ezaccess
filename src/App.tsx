import React from "react";
import Data from "./utils/data";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import { useForm } from "./context/FormContext";
import { useData } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data } = useData();

  const { showForm, setShowForm } = useForm();

  function handleAdd() {
    setShowForm(!showForm);
  }

  return (
    <div className="bg-gray-800 p-4 text-white text-sm">
      <ToastContainer />
      {showForm ? (
        <ItemForm />
      ) : (
        <>
          <div className="mb-4">
            <h1 className="text-lg font-semibold text-center">Details</h1>
          </div>
          <div className="flex flex-col gap-3">
            {data.length !== 0 ? (
              data.map((item: Data) => (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  data={item.data}
                />
              ))
            ) : (
              <p className="text-center">No data present!</p>
            )}
          </div>
          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded transition duration-300 ease-in-out"
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
