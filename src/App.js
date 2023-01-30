import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// Import pages
import Index from './pages/index/Index';
import Employees from './pages/employees/Employees';


const App = () => {

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