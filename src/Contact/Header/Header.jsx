import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='bg-primary'>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                        <div class="container-fluid">
                            <Link to="/" className='navbar-brand text-white'>Assignment</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link to="/" className='nav-link active text-white'> Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/calculator" className='nav-link text-white'>Calculator</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/gallery" className='nav-link text-white'>Gallery</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/contact" className='nav-link text-white'>Contact</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header