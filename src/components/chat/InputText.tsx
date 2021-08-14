import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { VscEdit, VscSaveAs } from 'react-icons/vsc'
import { RiDeleteBin5Line } from 'react-icons/ri'

const InputText: React.FC<any> = (props) => {
    const [dropdown, setDropdown] = useState(true)
    const [textInput, setTextInput] = useState(null)


    return (
        <>
            {props.userMessageID !== props.user.id ?
                <div className={"left-mes"}>
                    <span>{props.mesRecName && props.mesRecName.first_name[0].toUpperCase()}{props.mesRecName && props.mesRecName.last_name[0].toUpperCase()}</span>

                    <input type='text'
                        value={textInput!} onChange={(e: any) => setTextInput(e.target.value)}
                        className={!dropdown ? 'editInput' : ' '} defaultValue={props.mesBody} readOnly={dropdown} />

                    {/* <div className="dropdown-mes">
                        <button onClick={() => {
                            !dropdown && props.putMessage(
                                {
                                    id: props.mesID,
                                    recipient: props.recipientID,
                                    body: textInput,
                                    title: 'default'
                                }

                            )
                            setDropdown(dropdown => !dropdown)
                        }} >
                            {!dropdown ? <VscSaveAs /> : <VscEdit />}
                        </button>
                        <button onClick={() => props.deleteMessage(props.mesID)}>
                            <RiDeleteBin5Line />
                        </button>
                    </div> */}







                </div>


                :
                <div className={"right-mes"}>

                    <input type='text'
                        value={textInput!} onChange={(e: any) => setTextInput(e.target.value)}
                        className={!dropdown ? 'editInput' : ' '} defaultValue={props.mesBody} readOnly={props.dropdown} />
                    <span>{props.user.first_name[0].toUpperCase()}{props.user.last_name[0].toUpperCase()}</span>

                    <div className="dropdown-mes">
                        <button onClick={() => {
                            !dropdown && props.putMessage(
                                {
                                    id: props.mesID,
                                    recipient: props.mesRecName.id,
                                    body: textInput,
                                    title: 'default'
                                }

                            )
                            setDropdown(dropdown => !dropdown)
                        }} >
                            {!dropdown ? <VscSaveAs /> : <VscEdit />}
                        </button>
                        <button onClick={() => props.deleteMessage(props.mesID)}>
                            <RiDeleteBin5Line />
                        </button>

                    </div>
                </div>

            }

        </>
    )
}

export default InputText;