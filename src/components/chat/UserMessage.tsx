import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { withRouter } from 'react-router-dom'

import InputText from './InputText'


const UserMessage: React.FC<any> = (props) => {


    const [text, setTextRange] = useState('')

    // const recipientID = props.location.pathname.split('=')[1]

    // console.log(props.message);

    const handleSubmit = (data: object) => {

        const formData = {
            recipient: props.userMessageID,
            title: 'Mes',
            body: text,
            user:props.userID.id,
        }

        props.postMessage(formData)
        setTextRange('')
        // props.getMessage(props.userMessageID)
    }

    return (
        <div className="messages-content">
            <div className="messages-content__user">
                <span className="userID">Chat: {props.userMessageID}</span>
            </div>
            <div className="messages-content__area">
                {props.message && props.message.map((mes: any,) => (
                    <InputText
                        mesID={mes.id}
                        userID={props.userID}
                        mesBody={mes.body}
                        userMessageID={mes.user}
                        putMessage={props.putMessage}
                        deleteMessage={props.deleteMessage}
                        mesRecName={mes.recipient}
                    />

                

                ))}

            </div>
            <div className="messages-content__send">
                <textarea value={text} onChange={(e: any) => setTextRange(e.target.value)} ></textarea>
                <button onClick={handleSubmit}>send
                    <IoIosSend />
                </button>
            </div>
        </div>
    )
}

export default withRouter(UserMessage)