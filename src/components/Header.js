import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/first'>First Component</Link>
            <Link to='/second'>Second Component</Link>
        </div>
    )
}

export default Header;