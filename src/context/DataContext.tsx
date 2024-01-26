import {useState, useEffect, createContext, useContext, ReactNode } from "react";
import Data from "../utils/data";
import { addData, getData, removeData, updateData } from "../utils/storage";

interface DataContextType {
  data: Data[];
  setData: (data: Data[]) => void;
  handleInsert: Function;
  handleDelete: Function;
  handleUpdate: Function;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

interface DataProviderProps {
  children: ReactNode;
}

function DataProvider({children}: DataProviderProps) {
  const [data, setData] = useState<Data[]>([]);

  function handleInsert(name: string, data: string) {
    addData(name, data);
    getUpdatedData();
  }

  function handleDelete(id: string) {
    removeData(id);
    getUpdatedData();
  }

  function handleUpdate(id: string, name: string, data: string) {
    updateData(id, name, data);
    getUpdatedData();
  }

  function getUpdatedData() {
    const storageData = getData();

    if (!storageData) {
      return;
    }

    setData(storageData);
  }

  useEffect(() => {
    const data = localStorage.getItem("EZACCESS_DATA");
    if (!data) {
      const items: Data[] = [];
      localStorage.setItem("EZACCESS_DATA", JSON.stringify(items));
    } else {
      if (JSON.parse(data).length !== 0) {
        setData(JSON.parse(data));
      }
    }
  }, []);

  return (
    <DataContext.Provider value={{data, setData, handleInsert, handleDelete, handleUpdate}}>
    {children}
    </DataContext.Provider>
  )
}

export {useData, DataProvider};
