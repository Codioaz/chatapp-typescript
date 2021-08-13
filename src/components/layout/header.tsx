import { connect } from 'react-redux'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import logo from '../../img/logo192.png'
import { setOpenClosePanel,Logout } from '../../store/action/auth'
import { HeaderType } from '../../interface/header.model'
import { FiLogOut } from 'react-icons/fi'
import { useState } from 'react'


const Header: React.FC<HeaderType> = (props: any) => {

    const [dropActive, setDropActive] = useState(false)

    const { user } = props.state.usersInfo
    const history = useHistory()

    return (
        <header className="header">
            <NavLink to={'/'}>
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                    <span>Sibty</span>
                </div>
            </NavLink>
            <div className="header__auth">
                {user
                    ?
                    <div className="header__auth__user" onClick={() => setDropActive(drop => !drop)}>
                        Hello, <span>{user.first_name}</span>
                        <picture className="user-image">
                            {user.first_name[0]}
                            {user.last_name[0]}
                        </picture>

                        <div className={dropActive ? "logout-content logout-show" : "logout-content"}
                            onClick={() => props.Logout(history.push)}
                        >
                            <FiLogOut />
                            Logout
                        </div>
                    </div>
                    :
                    <div className="header__auth__login">
                        <button onClick={() => props.setOpenClosePanel(true)}>
                            Login
                        </button>
                    </div>
                }


            </div>
        </header>
    )
}

const mapStateToProps = (state: any) => ({ state })
export default connect(mapStateToProps,
    {
        setOpenClosePanel,
        Logout
    }
)(Header)



