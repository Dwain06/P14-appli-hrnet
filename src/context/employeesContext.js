import { createContext, useReducer } from "react";
import employeesReducer from "./employeesReducer";

const INITIAL_STATE = {
  employeesList: [],
};

export const EmployeesContext = createContext(INITIAL_STATE);

export const EmployeesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeesReducer, INITIAL_STATE);

  return (
    <EmployeesContext.Provider value={{ employeesList: state.employeesList, dispatch }}>
      {children}
    </EmployeesContext.Provider>
  );
};