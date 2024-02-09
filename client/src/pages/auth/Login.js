import React from 'react'
import { useState } from 'react'

import './Login.css'

// imports images here 
import LoginImg from '../../Images/Login.png'


const Login = () => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        // redirect to dashboard
        window.location.href = '/student/Home'
    }

    const handleSignup = () => {
        console.log('signup');
    }


  return (
    <div className="LoginComponent">
            <div className="LoginComponent-in">
                <div className="LoginComponent-in-in">
                    <div className="Login-in-one">
                        <div className="Login-one">
                            <div className="Login-one-in">
                                <div className="Login-one-one">
                                    <h1>Welcome Back</h1>
                                    <p>Login to get started</p>
                                </div>
                                <div className="Login-one-two">
                                    <div className="Login-one-two-in">
                                        <div className="Login-input-one">
                                            <input 
                                                type="text"
                                                placeholder='username'
                                                name='username'
                                                value={userData.username}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="Login-input-two">
                                            <input 
                                                type="password" 
                                                placeholder='password'
                                                name='password'
                                                value={userData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="Login-input-three">
                                            <button onClick={handleSubmit}>Login</button>
                                        </div>
                                    </div>
                                    <div className="Login-one-two-in-in">
                                        <div className="Login-one-two-in-in-one">
                                            <div className="Login-cr-one">
                                                OR
                                            </div>
                                            <div className="Login-cr-two" onClick={handleSignup}>
                                                <button>
                                                    Signup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Login-two">
                            <img src={LoginImg} alt="login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login