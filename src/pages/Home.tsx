import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import HomeContent from '../components/home/HomeContent';
import Container from '../components/layout/container';
import Auth from '../modal/auth/AuthModal';
import { getRegisterAuth, setOpenClosePanel, getLoginAuth, checkToken } from '../store/action/auth'
import { getUser,getUsers } from '../store/action/user'



const Home: React.FC = (props: any) => {

    const { openLoginPage, authToken } = props.state.auth
    const { user } = props.state.usersInfo


    useEffect(() => {
        authToken && props.checkToken(authToken);
        authToken && !user && props.getUser()
        !user && props.getUsers()
        user && props.history.push('/chat')
    }, [user,authToken])
    return (
        <Container>
            <HomeContent />
            {openLoginPage && <Auth getLoginAuth={props.getLoginAuth} getRegisterAuth={props.getRegisterAuth} setOpenClosePanel={props.setOpenClosePanel} />}
        </Container>
    )
}


const mapStateToProps = (state: any) => ({ state })
export default connect(mapStateToProps, {
    getRegisterAuth,
    getLoginAuth,
    setOpenClosePanel,
    checkToken,
    getUser,
    getUsers
})(Home)
