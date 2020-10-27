import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {

    return (
        <div className="App-title">
            <Link to='/'> Home</Link>
            <> | </>
            <Link to='/product'> Products</Link>
            <> | </>
            <Link to='/about'> About us </Link>
        </div>
    )
};

export default navBar;
