import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllDoctor from '../pages/AllDoctor';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import DoctorDetails from '../pages/DoctorDetails';
import ErrorPage from '../pages/ErrorPage';
import ChatBox from '../pages/Chatbox';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-AllDoctor" element={<AllDoctor />} />
                <Route path="/doctor-detail/:id" element={<DoctorDetails />} />
                <Route path="/Chatbox" element={<ChatBox />} />
                <Route path="*" element={<Home />} />
                <Route path="/*" element={<ErrorPage />} />

            </Routes>
        </>
    );
};

export default RouterRoutes;