import React, { useState } from 'react'
import { NavLink, useHistory, withRouter } from 'react-router-dom'

const UserCard: React.FC<any> = (props) => {
    // const recipientID = props.location.pathname.split('=')[1]
     
    const [active,setActive] = useState(false)
    const history = useHistory()

    
    return (
        <NavLink
            activeClassName="active-user"
            className={"user-card"}
            to={`/chat/messages/id=${props.user && props.user.id}`}
            onClick={() =>{
                props.getMessage(props.user.id)
            }
        }
            >
                <div className="user-card__image ">
                    {props.user && props.user.username[0].toUpperCase()}
                </div>
                <div className="user-card__name">
                    {props.user && props.user.username}
                </div>
        </NavLink>

    )
}

export default  withRouter(UserCard)