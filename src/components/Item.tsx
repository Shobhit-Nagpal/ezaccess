import React, { useState } from "react";
import { FaRegCopy, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useData } from "../context/DataContext";
import { Flip, toast } from "react-toastify";

interface ItemProps {
  id: string;
  name: string;
  data: string;
}

const Item: React.FC<ItemProps> = ({ id, name, data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setId] = useState(id);
  const [editedName, setEditedName] = useState(name);
  const [editedData, setEditedData] = useState(data);
  const { handleUpdate, handleDelete } = useData();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editedName === "") {
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

    if (editedData === "") {
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

    handleUpdate(itemId, editedName, editedData);
    setIsEdit(false);
    toast.success("Updated!", {
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
  }

  function handleCopy() {
    // Copy logic
    navigator.clipboard.writeText(data);
    toast.success("Copied", {
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
  }

  function onEdit() {
    // Edit logic
    handleUpdate(itemId, editedName, editedData);
    setIsEdit(!isEdit);
  }

  function onDelete() {
    // Delete logic
    handleDelete(itemId);
  }

  function truncateString(str: string, num: number): string {
    if (str.length > num) {
      const displayStr = str.slice(0, num) + "...";
      return displayStr;
    }

    return str;
  }

return (
  <div className="flex items-center justify-between p-2 bg-gray-700 text-white rounded-md border border-gray-600 shadow-md">
    {isEdit ? (
      <div className="flex-grow">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Name"
          />

          <label className="text-sm font-medium text-gray-300">Data</label>
          <input
            type="text"
            value={editedData}
            onChange={(e) => setEditedData(e.target.value)}
            className="p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Data"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 rounded hover:bg-blue-600 text-sm font-medium"
          >
            Save
          </button>
        </form>
      </div>
    ) : (
      <div className="flex-grow">
        <p className="text-sm font-medium truncate text-gray-300">
          {truncateString(name, 15)}
        </p>
      </div>
    )}

    <div className="flex items-center space-x-2">
      <button
        onClick={handleCopy}
        className={`p-2 rounded hover:bg-gray-600 text-sm ${isEdit ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isEdit}
      >
        <FaRegCopy />
      </button>
      <button
        onClick={onEdit}
        className="p-2 rounded hover:bg-gray-600 text-sm"
      >
        <FaEdit />
      </button>
      <button
        onClick={onDelete}
        className="p-2 rounded hover:bg-gray-600 text-sm"
      >
        <FaTrashAlt />
      </button>
    </div>
  </div>
);
};

export default Item;
