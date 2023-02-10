import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EmployeesContextProvider } from './context/employeesContext';

import "./styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeesContextProvider>
      <App />
    </EmployeesContextProvider>
  </React.StrictMode>
);