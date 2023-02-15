import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

// Import pages
import Index from './pages/index/Index';
import Employees from './pages/employees/Employees';
import { EmployeesContext } from './context/employeesContext';
import { getEmployees, saveEmployees } from './utils/manageEmployees';



const App = () => {

  const { employeesList, dispatch } = useContext(EmployeesContext);
  useEffect(() => dispatch(getEmployees()), [dispatch]);
  useEffect(() => saveEmployees(employeesList), [employeesList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;