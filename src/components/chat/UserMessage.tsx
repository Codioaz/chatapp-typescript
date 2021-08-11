import React from 'react'
import UserCard from './UserCard'
import { IoIosSend } from 'react-icons/io'

const UserMessage: React.FC = () => {

    return (
        <div className="messages-content">
            <div className="messages-content__user">
                <UserCard />
            </div>
            <div className="messages-content__area">

                <div className="left-mes">
                    <span>YA</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates! Sapiente
                    </p>
                </div>
                <div className="right-mes">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates! Sapiente
                    </p>
                    <span>SR</span>
                </div>
                <div className="left-mes">
                    <span>YA</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates! Sapiente
                    </p>
                </div>   <div className="left-mes">
                    <span>YA</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates! Sapiente
                    </p>
                </div>
                <div className="right-mes">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates! Sapiente
                    </p>
                    <span>SR</span>
                </div>  <div className="right-mes">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates! Sapiente
                    </p>
                    <span>SR</span>
                </div>
            </div>
            <div className="messages-content__send">
                <textarea></textarea>
                <button>send
                    <IoIosSend />
                </button>
            </div>
        </div>
    )
}

export default UserMessage