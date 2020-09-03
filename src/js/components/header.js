import React from 'react'


import { Link } from 'react-router-dom';

const user = null

const Header = (props) => {
    
    

    return (
        <header className="header-wrapper">
            <nav className="common-container py-3">
                <ul className="flex justify-between">
                    <li>
                        <Link className="font-black f3 text-blue-dark" to="/">Bookstore home</Link>
                    </li>
                    <li>
                        <Link className="font-black f3 text-blue-dark" to="/login">login</Link>
                    </li>
                    <li>
                        <Link className="font-black f4 text-blue-dark" to="/browse">Browse books</Link>
                    </li>
                  
                </ul>
            </nav>
        </header>
    )
}

export default Header