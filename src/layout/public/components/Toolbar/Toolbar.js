import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Link } from 'react-router-dom'
import { isLogin, deleteToken } from '../../../../Service/AuthService'
import Logo from '../../../../img/saladbarlogo2.png'
import Login from '../Login/Login'

const Toolbar = (props) => {

    const handleLogout = () => {
        deleteToken();
        window.location.reload()
    }

    return (
        <>
                {
                    isLogin() ?
                <div className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-toggle-button">
                        <DrawerToggleButton click={props.drawerToggleClickHandler} />
                    </div>
                    <div className="logo">
                        <img className='logo-img' src={Logo} alt='img-logo' /> 
                    </div>
                    <div className="toolbar-navigation-items">
                            <ul>
                                <li>
                                    <Link to='/addingredient' className="control-li">add ingredient</Link>
                                </li>
                                <li>
                                    <Link to='/ingredients' className="control-li">ingredients</Link>
                                </li>
                                <li>
                                    <Link to='/saladmaker' className="control-li">salad maker</Link>
                                </li>
                                <li>
                                    <Link to='/saladspreview' className="control-li">salads preview</Link>
                                </li>
                                <li>
                                    <Link to='/' className="control-li" onClick={() => { handleLogout() }} > logout </Link>
                                </li>
                            </ul> 
                    </div>
                </nav> 
                    </div> :
                    <div className="toolbar home" >
                        <nav className="toolbar-navigation">
                        <div className="logo">
                            <img className='logo-img' src={Logo} alt='img-logo' />
                        </div>
                            <div className="toolbar-navigation-items">
                                <ul>
                                    <li className="login">
                                        <Login />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                }
        </>
    )
}

export default Toolbar