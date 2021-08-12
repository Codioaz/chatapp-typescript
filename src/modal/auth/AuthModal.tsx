import React, { useEffect } from 'react'
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { AuthModalType } from '../../interface/auth.model';
import Login from './Login';
import Register from './Register';


const Auth: React.FC<AuthModalType> = (props) => {

  const [registerPopup, setRegisterPopup] = useState(false);

  return (
    <div className="login-popup">
      {!registerPopup ?
        <Login getLoginAuth={props.getLoginAuth} setRegisterPopup={() => setRegisterPopup(registerPopup => !registerPopup)} /> :
        <Register getRegisterAuth={props.getRegisterAuth} setRegisterPopup={() => setRegisterPopup(registerPopup => !registerPopup)} />
      }
      <div className="close-btn" onClick={() => props.setOpenClosePanel(false)}>
        <AiOutlineClose />
      </div>
    </div>
  );
};



export default Auth;

