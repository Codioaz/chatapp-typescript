import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const UserCard: React.FC<any> = (props) => {
    const recipientID = props.location.pathname.split('=')[1]
    
    console.log(recipientID);
    
    return (
        <NavLink
            to={`/chat/messages/id=${props.user && props.user.id}`}
            activeClassName="active-user"
            className="user-card"
            >

                <div className="user-card__image "  onClick={() =>props.getMessage(recipientID)}>
                    {props.user && props.user.username[0].toUpperCase()}
                </div>
                <div className="user-card__name">
                    {props.user && props.user.username}
                </div>
        </NavLink>

    )
}

export default  withRouter(UserCard)