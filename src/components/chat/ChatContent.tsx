import React from 'react'
import UserList from './UserList'
import UserMessage from './UserMessage'

const ChatContent: React.FC = () => {
    return (
        <div className="chat-content">
            <UserList />
            <UserMessage />
        </div>
    )
}

export default ChatContent