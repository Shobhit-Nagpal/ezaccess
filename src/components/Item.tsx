import React, { useState } from "react";
import { FaRegCopy, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useData } from "../context/DataContext";

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
    handleUpdate(itemId, editedName, editedData);
    setIsEdit(false);
  }

  function handleCopy() {
    // Copy logic
    navigator.clipboard.writeText(data);
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

  return (
    <div className="flex items-center justify-between p-2 bg-gray-800 text-white rounded-md">
      {isEdit ? (
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label>Name</label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="p-2 rounded bg-gray-700 text-white"
              placeholder="Name"
            />

            <label>Data</label>
            <input
              type="text"
              value={editedData}
              onChange={(e) => setEditedData(e.target.value)}
              className="p-2 rounded bg-gray-700 text-white"
              placeholder="Data"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p className="text-xl font-medium p-3">{name}</p>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <button onClick={handleCopy} className="p-2 rounded hover:bg-gray-700">
          <FaRegCopy />
        </button>
        <button onClick={onEdit} className="p-2 rounded hover:bg-gray-700">
          <FaEdit />
        </button>
        <button onClick={onDelete} className="p-2 rounded hover:bg-gray-700">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Item;
