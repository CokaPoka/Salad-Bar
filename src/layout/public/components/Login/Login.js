import React, { useState } from "react";
import { loginUser } from "../../../../Service/service";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { setToken } from "../../../../Service/AuthService";

const Login = () => {
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
        <form className="login-form">
            <input type="text" placeholder="username" className="login-input username" required onInput={e => {
                setUsername(e.target.value)
            }} />
            <input type="password" placeholder="password" className="login-input password" required onInput={e => {
                setPassword(e.target.value)
            }} />
            <input type="submit" value="login" className="btn-login" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
    );
};

export default Login;