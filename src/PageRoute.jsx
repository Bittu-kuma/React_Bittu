import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddContact from './Contact/AddContact';
import ContactList from './Contact/ContactList';
import Header from './Contact/Header/Header';
import Home from './Pages/Home/Home';
import EditContact from './Contact/EditContact';
import { ToastContainer } from 'react-toastify';
import Calculator from './calculator/Calculator';
import Gallery from './gallery/Gallery';

const PageRoute = () => {
    return (
        <>
            <BrowserRouter>
                <ToastContainer/>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/calculator' element={<Calculator/>} />
                    <Route path="/contact" element={<ContactList />}/>
                    <Route path='add-contact' element={<AddContact />} />
                    <Route path='edit/:id' element={<EditContact/>} />
                    <Route path='gallery' element={<Gallery/>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoute;