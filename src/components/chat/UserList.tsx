import React from 'react'
import { BsSearch } from 'react-icons/bs'
import UserCard from './UserCard'

const UserList: React.FC<any> = (props) => {

// console.log(props.userID);

    return (
        <div className="users-content">
            <div className="users-content__search">
                <div className="search-icon">
                    <BsSearch />
                </div>
                <input type="text" placeholder="Search" onChange={(e) => props.getUsersSearch(e.target.value)} />
            </div>
            <div className="users-content__list">
                {props.users.users && props.userID && props.users.users.results.filter((users:any) => users.id !==props.userID.id ).map((user: object) => <UserCard getMessage={props.getMessage} user={user} />)}

            </div>

        </div>
    )
}

export default UserList