import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/homePage';
import CreateBranchOfficeForm from './page/CreateBranchOfficeForm';
import EditBranchOfficeForm from './page/EditBranchOfficeForm';
import DeleteBranchOfficeDialog from './page/DeleteBranchOfficeDialog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branch-offices/create" element={<CreateBranchOfficeForm />} />
        <Route path="/branch-offices/:code/edit" element={<EditBranchOfficeForm />} />
        <Route
          path="/branch-offices/:code/delete"
          element={<DeleteBranchOfficeDialog open={true} onClose={() => {}} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
