import React from 'react'
import { ChatType } from '../../interface/chat.model'
import UserList from './UserList'
import UserMessage from './UserMessage'

const ChatContent: React.FC<ChatType> = (props) => {

    return (
        <div className="chat-content">
            <UserList
                user={props.user}
                isLoading={props.isLoading}
                getMessage={props.getMessage}
                getUsersSearch={props.getUsersSearch}
                users={props.users}
            />

            <UserMessage
                deleteMessage={props.deleteMessage}
                user={props.user}
                getMessage={props.getMessage}
                userMessageID={props.userMessageID}
                postMessage={props.postMessage}
                putMessage={props.putMessage}
                messages={props.messages}
            />

        </div>
    )
}

export default ChatContent