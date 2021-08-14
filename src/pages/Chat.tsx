import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import ChatContent from '../components/chat/ChatContent'
import Container from '../components/layout/container'
import Loading from '../components/ui/loading'
import { checkToken } from '../store/action/auth'
import { getUser, getUsers, getUsersSearch, getMessage, postMessage, deleteMessage, putMessage } from '../store/action/user'


const Chat: React.FC = (props: any) => {

    const { authToken } = props.state.auth
    const { user, users, messages, userMessageID } = props.state.usersInfo
    const recipientID = props.location.pathname.split('=')[1]

    console.log(props.state.usersInfo.isLoading);

    useEffect(() => {
        authToken && props.checkToken(authToken);
        !user && props.getUser()
        !user && props.getUsers()

    }, [])
    useEffect(() => {
        props.getMessage(recipientID)

    }, [recipientID])



    return (
        <>
            {(!user || !users) && <Loading />}
            <Container>
                <ChatContent
                    isLoading={props.state.usersInfo.isLoading }
                    userMessageID={userMessageID}
                    getMessage={props.getMessage}
                    message={messages}
                    getUsersSearch={props.getUsersSearch}
                    postMessage={props.postMessage}
                    deleteMessage={props.deleteMessage}
                    putMessage={props.putMessage}
                    userID={user}
                    users={users} />
            </Container>
        </>
    )
}
const mapStateToProps = (state: any) => ({ state })

export default connect(mapStateToProps,

    {
        checkToken,
        getUser,
        getUsers,
        getUsersSearch,
        getMessage,
        postMessage,
        deleteMessage,
        putMessage
    })(Chat)