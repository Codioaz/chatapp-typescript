import React from 'react'
import UserList from './UserList'
import UserMessage from './UserMessage'

const ChatContent: React.FC<any> = (props) => {
    
    return (
        <div className="chat-content">
            <UserList 
                userID={props.userID}
                isLoading={props.isLoading} 
                getMessage={props.getMessage}  
                getUsersSearch={props.getUsersSearch} users={props} />
            
            <UserMessage 
                deleteMessage={props.deleteMessage} 
                userID={props.userID} 
                getMessage={props.getMessage} 
                userMessageID={props.userMessageID} 
                postMessage={props.postMessage} 
                putMessage={props.putMessage}
                message={props.message} />
        </div>
    )
}

export default ChatContent