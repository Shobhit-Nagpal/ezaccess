import Data from "./data";
import { v4 as uuid } from "uuid";

export function isDataPresent(): boolean {
  const data = localStorage.getItem("data");

  if (!data) {
    return false;
  }

  return true;
}

export function getData(): Data[] | null {
  const exists = isDataPresent();

  if (!exists) {
    return null;
  }

  const data = JSON.parse(localStorage.getItem("data")!) as Data[];

  return data;
}

export function addData(name: string, data: string): void {
  const storageData = getData();

  if (!storageData) {
    return;
  }

  const uniqueId = uuid() as string;
  const item = {
    id: uniqueId,
    name: name,
    data: data,
  };

  storageData!.push(item);

  localStorage.setItem("data", JSON.stringify(storageData));
}

export function removeData(id: string) {
  const storageData = getData();

  if (!storageData) {
    return;
  }

  const updatedData = storageData.filter((item) => item.id !== id);

  localStorage.setItem("data", JSON.stringify(updatedData));
}

export function updateData(id: string, name: string, data: string) {
  const storageData = getData();

  if (!storageData) {
    return;
  }

  const updatedItem: Data = {
    id: id,
    name: name,
    data: data
  };

  const updatedData = storageData.map((item) => {
    if (item.id === id) {
      return updatedItem;
    }
    return item;
  });

  localStorage.setItem("data", JSON.stringify(updatedData));
}