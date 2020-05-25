import React, { useState, useEffect } from "react";
import { registerUser } from "../../../../Service/service";
import "./Register.css";
import { setToken, isLogin } from "../../../../Service/AuthService";
import { useHistory } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm, setPwConfirm] = useState('')
    const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)
    const [passMsg, setPassMsg] = useState('')
    const history = useHistory();

    useEffect(() => {
        //password includes minimum eight characters, at least one letter and one number:
        function isValidPw() {
            if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
                setValidPw(true)
            }
            else {
                setValidPw(false);
            }
        }
        console.log(password)
        isValidPw()
    }, [password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
        console.log(pwConfirm === password)
    }, [pwConfirm, password])

    console.log(name, surname, username, password, email);



    const handleSubmit = () => {
        if (!validPw) {
            setPassMsg('password includes minimum eight characters, at least one letter and one number');
            return
        } else if (!isSame) {
            setPassMsg('please match passwords');
            return
        } else {
            registerUser(name, surname, username, password, email)
                .then((res) => {
                    setToken(res.data.token);
                    console.log(res.data.token);
                    isLogin();
                    history.push('/addingredient');
                    window.location.reload()
                })
        }
    }

    return (
            <div className="register-wrapper">
                <h1 className="register-text">CREATE A NEW ACCOUNT</h1>
                <form className="register-form">
                    <input type="text" className="register-input" placeholder="name" required onInput={e => {
                        setName(e.target.value)
                    }} />
                    <input type="text" className="register-input" placeholder="surname" required onInput={e => {
                        setSurname(e.target.value)
                    }} />

                    <input type="text" className="register-input" placeholder="username" required onInput={e => {
                        setUsername(e.target.value)
                    }} />
                    <input type="email" className="register-input" placeholder="e-mail" required onInput={e => {
                        setEmail(e.target.value)
                    }} />
                    <input type="password" className="register-input" placeholder="password" required onInput={e => {
                        setPassword(e.target.value)
                    }} />
                    <input type="password" className="register-input" placeholder="confirm password" required onInput={e => {
                        setPwConfirm(e.target.value)
                    }} />
                    <input type="submit" className="register-input btn-register" value="register" onClick={e => { e.preventDefault(); handleSubmit() }} />
                </form>
                <p>{passMsg}</p>
            </div>
    );
};

export default Register;