import React from 'react';

function Nav() {
    return (
        <nav class='navbar navbar-expand-lg navbar-light bg-primary'>
        <a class='navbar-brand' href='/'>React Google Books</a>
        <div class='navbar-nav'>
            <a class='nav-item nav-link' href='/'>Search</a>
            <a class='nav-item nav-link' href='/saved'>Saved</a>
        </div>
    </nav>
    );
}

export default Nav;
