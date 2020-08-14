import React from 'react';
import './style.css';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand' href='/'>React Google Books</a>
        <div className='navbar-nav'>
            <a className='nav-item nav-link' href='/'>Search</a>
            <a className='nav-item nav-link' href='/saved'>Saved</a>
        </div>
    </nav>
    );
}

export default Nav;
