import React, { useState } from "react";
import { useForm } from "../context/FormContext";
import { FaTimes } from "react-icons/fa";
import { useData } from "../context/DataContext";
import { Flip, toast } from "react-toastify";

function ItemForm() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const { handleInsert } = useData();

  const { setShowForm } = useForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Name cannot be empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      return;
    }

    if (data === "") {
      toast.error("Data cannot be empty", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      return;
    }

    handleInsert(name, data);
    setName("");
    setData("");
    setShowForm(false);
    toast.success("Added successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 relative">
      <button
        onClick={() => {
          setName("");
          setData("");
          setShowForm(false);
        }}
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-800 hover:text-gray-600"
      >
        <FaTimes size={20} />
      </button>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add data
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="link"
          >
            Data
          </label>
          <input
            id="data"
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter data"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default ItemForm;
