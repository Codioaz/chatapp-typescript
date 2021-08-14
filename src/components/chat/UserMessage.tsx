import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosSend } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { UserMesType } from '../../interface/chat.model'

import InputText from './InputText'


const UserMessage: React.FC<UserMesType> = (props) => {


    const [text, setTextRange] = useState('')
    const history = useHistory()

    
    const handleSubmit = (data: object) => {

        const formData = {
            recipient: props.userMessageID,
            title: 'Mes',
            body: text,
            user: props.user.id,
        }

        props.postMessage(formData)
        setTextRange('')
    }

    return (
        <div className="messages-content">
            {history.location.pathname !== '/chat'
                ?
                <>
                    <div className="messages-content__user">
                        <span className="userID">Chat: {props.userMessageID}</span>
                    </div>
                    <div className="messages-content__area">
                        {props.messages && props.messages.map((mes: any,) => (
                            <InputText
                                mesID={mes.id}
                                user={props.user}
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
                </>
                :
                <div className="empth-content">
                    <p>
                        Hi Dear.Welcome <strong>Sibty</strong> chat
                        Please choose user
                    </p>
                    <i>
                        <AiOutlineClose />
                    </i>
                </div>
            }
        </div>
    )
}

export default UserMessage