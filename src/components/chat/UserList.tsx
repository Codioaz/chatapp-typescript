import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { UserListType } from '../../interface/chat.model'
import Loading from '../ui/loading'
import LoadingSearch from '../ui/loading-search'
import UserCard from './UserCard'

const UserList: React.FC<UserListType> = (props) => {


    return (
        <div className="users-content">
            <div className="users-content__search">
                <div className="search-icon">
                    <BsSearch />
                </div>
                <input type="text" placeholder="Search" onChange={(e) => props.getUsersSearch(e.target.value)} />
            </div>

            {props.isLoading
                ? <LoadingSearch />
                :
                <div className="users-content__list">
                    {props.users  && props.users.results.filter((users: any) => users.id !== props.user.id).map((user:object ) => <UserCard getMessage={props.getMessage} user={user} />)}

                </div>
            }

        </div>
    )
}

export default UserList