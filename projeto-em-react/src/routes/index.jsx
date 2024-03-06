import {BrowserRouter , Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Contato from '../pages/Contato';
import SobreMim from '../pages/SobreMim';
import React from 'react'

function RoutesApp() {
    return(
    <BrowserRouter>
        <Routes>           
            <Route path='/' element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobreMim" element={<SobreMim />} />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp 