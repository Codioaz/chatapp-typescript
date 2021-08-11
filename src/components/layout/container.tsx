import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './header'


const Container: React.FC = (props) => {
    return (
        <Fragment>
            <Header />
            <main className="container">
                {props.children}
            </main>
            <ToastContainer
                position="top-right"
                autoClose={8000}
                className='f-size'
            />
        </Fragment>
    )
}

export default Container