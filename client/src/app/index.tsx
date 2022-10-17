import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar/loadable';
import Banner from './components/Banner/loadable';
import Footer from './components/Footer/loadable';

import NotFoundPage from './Pages/NotFoundPage/loadable';
import Credentials from './Pages/Credentials/loadable';
import Quiz from './Pages/Quiz/loadable';
import Preview from './Pages/Preview/loadable';
import AdminAllResponses from './Pages/AdminAllResponses/loadable';
import AdminPreview from './Pages/AdminPreview/loadable';
import DataTableComp from './Pages/DataTableComp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="test" element={<DataTableComp />} />
        <Route path="step1" element={<Credentials />} />
        <Route path="step2" element={<Quiz />} />
        <Route path="step3" element={<Preview />} />
        <Route path="admin" element={<AdminAllResponses />} />
        <Route path="admin/:pageNumber" element={<AdminAllResponses />} />
        <Route path="admin/response/:userId" element={<AdminPreview />} />
        <Route path="/" element={<Credentials />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
