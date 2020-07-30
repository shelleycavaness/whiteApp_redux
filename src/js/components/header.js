import React from 'react'


import { Link } from 'react-router-dom';

const user = null

const Header = (props) => {
    
    

    return (
        <header className="">
            <nav className="common-container py-3">
                <ul className="flex justify-between">
                    <li>
                        <Link className="font-black f1 text-blue-dark" to="/">Home</Link>
                    </li>
                  
                </ul>
            </nav>
        </header>
    )
}

export default Header