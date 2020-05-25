import React, { useState } from 'react'
import Register from '../Register/Register'
import Logo from '../../../../img/saladbarlogo2.png'
import './Home.css'
import { loginUser } from '../../../../Service/service'
import { useHistory } from 'react-router-dom'
import { setToken } from '../../../../Service/AuthService'

const Home =()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleSubmit = () => {
        loginUser(username, password).then(res => {
            setToken(res.data.token);
            history.push("/addingredient");
            window.location.reload()
        });
    };
    return (
        <div className="home-wrapper">
            <div className="home-logo-container">
                <img className='home-logo-img' src={Logo} alt='img-logo' />
            </div>
            <div className="home-login-container">
                <form className="home-login-form">
                    <input type="text" placeholder="username" className="register-input username" required onInput={e => {
                        setUsername(e.target.value)
                    }} />
                    <input type="password" placeholder="password" className="register-input password" required onInput={e => {
                        setPassword(e.target.value)
                    }} />
                    <input type="submit" value="login" className="home-btn-login" onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }} />
                </form>
            </div>
            <Register />

        </div>
    )
}

export default Home