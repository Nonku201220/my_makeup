import React, { useState } from 'react';
import css from './Header.module.css';
import { CgSomeIcon, CgAnotherIcon, CgShoppingCart } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';
import Logo from '../../assets/logo.jpg';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((showMenu) => !showMenu);
    };

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt='' />
                <span></span>
            </div>

            <div className={css.bars} onClick={toggleMenu}>
                <GoThreeBars />
            </div>

            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu} style={{ display: showMenu ? 'inherit' : 'none' }}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <input type="text" className={css.search} placeholder='Search' style={{ border: 'none' }} />
                <CgShoppingCart className={css.cart} />
            </div>
        </div>
    );
};

export default Header;
