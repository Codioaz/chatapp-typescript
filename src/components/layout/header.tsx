import { connect } from 'react-redux'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo192.png'
import { setOpenClosePanel } from '../../store/action/auth'
import { HeaderType } from '../../interface/header.model'

const Header: React.FC<HeaderType> = (props:any) => {

    const {user } = props.state.usersInfo

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
                    <div className="header__auth__user">
                        Hello, <span>{user.first_name}</span>
                        <picture className="user-image">
                            {user.first_name[0]}
                            {user.last_name[0]}
                            </picture>
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
        setOpenClosePanel
    }
)(Header)



