// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import Footer from './components/Footer';
import Modal from './components/Modal'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevo-video" element={<NuevoVideo />} />
                <Route path='/modal' element={<Modal />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

