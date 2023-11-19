import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Inicio from './pages/Inicio';
import Nav from './components/layout/Nav';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Nav />

            <Routes>
                <Route path='/' element={ <Inicio /> } />
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

export default App
