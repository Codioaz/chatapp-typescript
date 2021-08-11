import React from 'react'
import { connect, useDispatch } from 'react-redux'
import HomeContent from '../components/home/HomeContent';
import Container from '../components/layout/container';
import Auth from '../modal/auth/AuthModal';
import {getRegisterAuth} from '../store/action/auth' 
const Home:React.FC = (props:any) => {

    // const Data = useSelector((state) => state)
    
    return(
        <Container>
            <HomeContent/>
            {/* <Auth /> */}
        </Container>
    )
}
let mapStateToProps = (state:any) => ({state})
export default connect(mapStateToProps,{
    getRegisterAuth
})(Home)
