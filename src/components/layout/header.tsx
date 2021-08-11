import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo192.png'
const Header: React.FC = () => {
    return (
        <header className="header">
            <NavLink to={'/'}>
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                    <span>Sibty</span>
                </div>
            </NavLink>
            <div className="header__auth">
                {/* <div className="header__auth__user">
                    Hello, <span>Sarkhan</span>
                    <picture className="user-image">SR</picture>
                </div> */}
                <div className="header__auth__login">
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header



