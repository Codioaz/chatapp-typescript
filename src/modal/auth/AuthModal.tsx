import React from 'react'
import { useState } from "react";
import Login from './Login';
import Register from './Register';


const Auth: React.FC = (props: any) => {

  const [registerPopup, setRegisterPopup] = useState(false);


  return (
    <div className="login-popup">
      {!registerPopup ?
        <Login setRegisterPopup={() => setRegisterPopup(registerPopup => !registerPopup)} /> :
        <Register setRegisterPopup={() => setRegisterPopup(registerPopup => !registerPopup)} />
      }
    </div>
  );
};



export default Auth;

