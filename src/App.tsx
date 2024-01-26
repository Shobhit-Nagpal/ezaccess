import Data from "./utils/data";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import { useForm } from "./context/FormContext";
import { useData } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdInfoOutline } from "react-icons/md";

function App() {
  const { data } = useData();

  const { showForm, setShowForm } = useForm();

  function handleAdd() {
    setShowForm(!showForm);
  }

  return (
    <div className="bg-gray-800 p-4 text-white text-sm">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-center">EZAccess</h1>
      </div>
      <ToastContainer />
      {showForm ? (
        <ItemForm />
      ) : (
        <>
          <div className="mb-4 flex flex-col items-center">
            <div className="relative flex items-center">
              <h1 className="text-lg font-semibold text-center">Details</h1>
              <div className="group ml-2 relative flex items-center">
                <MdInfoOutline className="text-xl cursor-pointer" />
                <span className="absolute hidden group-hover:block w-64 bg-gray-700 text-gray-200 text-xs p-2 rounded-md transform -translate-x-3/4 -translate-y-1/2 z-10 left-full ml-2">
                  Note: Please don't store any sensitive data like passwords or
                  financial details. All your data is being stored in the browser itself.
                </span>
              </div>
            </div>
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
