import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormContextType {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

function useForm(): FormContextType {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}

interface FormProviderProps {
  children: ReactNode;
}

function FormProvider({ children }: FormProviderProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <FormContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </FormContext.Provider>
  );
}

export { useForm, FormProvider, FormContext };
