import React from 'react'
import {BsSearch} from 'react-icons/bs'
import UserCard from './UserCard'

const UserList:React.FC = () => {

    return (
        <div className="users-content">
        <div className="users-content__search">
            <div className="search-icon">
                <BsSearch/>
            </div>
            <input type="text" placeholder="Search" />
        </div>
        <div className="users-content__list">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>

        </div>
            
        </div>
        )
} 

export default UserList