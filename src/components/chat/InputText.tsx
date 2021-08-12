import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { VscEdit, VscSaveAs } from 'react-icons/vsc'
import { RiDeleteBin5Line } from 'react-icons/ri'

const InputText: React.FC<any> = (props) => {
    const [dropdown, setDropdown] = useState(true)
    const [textInput, setTextInput] = useState(null)
    return (

        <div className="right-mes">
            <span>YA</span>
            <input type='text'
                value={textInput!} onChange={(e: any) => setTextInput(e.target.value)}
                className={!dropdown ? 'editInput' : ' '} defaultValue={props.mesBody} readOnly={props.dropdown} />
            <div className="dropdown-mes">
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

            </div>
        </div>

    )
}

export default InputText;