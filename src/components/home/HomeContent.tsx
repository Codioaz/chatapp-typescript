import React from 'react'
import ChatBg from '../../img/chat-bg.png'

const HomeContent: React.FC <any> = (props) => {

    return (
        <div className="home-content">
            <div className="home-content__title">
                <h1>New area <span>Sibty</span> social chat </h1>
                <p>Come in my dear</p>
                <button onClick={() => props.setOpenClosePanel(true)}> Register</button>
            </div>
            <div className="home-content__image">
                <img src={ChatBg} alt="Chat"/>
            </div>
        </div>
    )
}

export default HomeContent;