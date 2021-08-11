import React from 'react'
import { connect, useSelector } from 'react-redux'
import Container from '../components/layout/container';

const Home:React.FC = (props:any) => {

    // const Data = useSelector((state) => state)
    console.log(props);
    
    return(
        <Container>
            <h1>Home</h1>
        </Container>
    )
}
let mapStateToProps = (state:any) => ({state})
export default connect(mapStateToProps,null)(Home)
