import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/crown.svg';
// the above way is a special syntax for using SVGs
// https://create-react-app.dev/docs/adding-images-fonts-and-files/

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            {/* Logo is an actual React component */}
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;