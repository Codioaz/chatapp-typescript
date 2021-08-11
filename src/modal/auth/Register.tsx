import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import * as aiIcon from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { AuthType } from '../../interface/auth.model';
import { GET_SIGNUP_PAGE } from '../../store/type';

//VALIDATE MESSAGES
const UserLogin = Yup.object().shape({

    username: Yup.string()
        .min(5, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),


    password: Yup.string()
        .min(8, "Please have at least 8 symbols")
        .max(15, "Very good!")
        .required("Required"),

});



const Register: React.FC<AuthType> = (props) => {

    const [viewPassword, setPasswordView] = useState(false)
    const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'GET_SIGNUP_PAGE' }),
    [dispatch]
  )
    return (
        <div className="auth-form">
            <Formik initialValues={{ firstname: "", lastname: "", username: "", password: "" }}
                validationSchema={UserLogin}
                onSubmit={(values) => {
                    // props.getLoginAuth(values)
                    console.log(values);
                    incrementCounter()
                }}>


                {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="form-content">
                            <div className="form-desc">
                                <h1>Welcome Back</h1>
                                <h2>Register</h2>
                            </div>
                            <div className="form-group">
                                <aiIcon.AiOutlineUser className='joinIcon' />
                                <Field name='firstname' type="text" placeholder='First name' />
                                <p><ErrorMessage name="username" /></p>
                            </div>     <div className="form-group">
                                <aiIcon.AiOutlineUser className='joinIcon' />
                                <Field name='lastname' type="text" placeholder='Last name' />
                                <p><ErrorMessage name="username" /></p>
                            </div>
                            <div className="form-group">
                                <aiIcon.AiOutlineUser className='joinIcon' />
                                <Field name='username' type="text" placeholder='username' />
                                <p><ErrorMessage name="username" /></p>
                            </div>

                            <div className="form-group">
                                <RiLockPasswordLine className='joinIcon' />
                                <Field name='password' type={!viewPassword ? "password" : "text"} placeholder='password' />
                                <p><ErrorMessage name="password" /></p>
                                <span className='password-view'
                                    onClick={() => setPasswordView(!viewPassword)}>
                                    {viewPassword
                                        ? <aiIcon.AiOutlineEye />
                                        : < aiIcon.AiOutlineEyeInvisible />}
                                </span>
                            </div>

                            <button type="button"> Continue </button>
                            <span onClick={props.setRegisterPopup} className="register-login">Login now </span>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Register