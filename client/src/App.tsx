import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Credentials from './components/Credentials';
import Quiz from './components/Quiz';
import Preview from './components/Preview';
import Footer from './components/Footer';
import AdminAllResponses from './components/AdminAllResponses';
import AdminPreview from './components/AdminPreview';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='step1' element={<Credentials />} />
        <Route path='step2' element={<Quiz />} />
        <Route path='step3' element={<Preview />} />
        <Route path='admin' element={<AdminAllResponses />} />
        <Route path='admin/:pageNumber' element={<AdminAllResponses />} />
        <Route path='admin/response/:userId' element={<AdminPreview />} />
        <Route path='/' element={<Credentials />} />
      </Routes>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
