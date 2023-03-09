import { useState } from 'react';
import "./header.css";
import Button from './Button';

const menuItems = ['Skills', 'Experience', 'Contact'];

const Header= () => {
    const [activeMenu, setActiveMenu] = useState('');

    const handleNavigation = (event) => {
        setActiveMenu(event.target.id);
    }

    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Button/>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span>Pete's</span>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menuItems.map((menu, index) => (
                            <li key={`menu-item-${index}`} className="nav-item">
                                <a
                                    className={`nav-link ${activeMenu === `menu-${menu.toLowerCase()}` ? "active" : ""} `}
                                    href={`#${menu.toLowerCase()}-section`}
                                    onClick={handleNavigation}
                                    id={`menu-${menu.toLowerCase()}`}
                                >
                                    {menu}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
   ) 
};
export default Header;