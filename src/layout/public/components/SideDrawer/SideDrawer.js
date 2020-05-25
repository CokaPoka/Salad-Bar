import React from 'react'
import './SideDrawer.css'
import { isLogin, deleteToken } from '../../../../Service/AuthService';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    const handleLogout = () => {
        deleteToken();
        window.location.reload()
    }

    return (
        <nav className={drawerClasses}>
            {isLogin() ?
                <ul>
                    <li>
                        <a href='/addingredient' className="control-li">add ingredient</a>
                    </li>
                    <li>
                        <a href='/ingredients' className="control-li">ingredients</a>
                    </li>
                    <li>
                        <a href='/saladmaker' className="control-li">salad maker</a>
                    </li>
                    <li>
                        <a href='/saladspreview' className="control-li">salads preview</a>
                    </li>
                    <li>
                        <a href='/' className="control-li" onClick={() => { handleLogout() }} > logout </a>
                    </li>
                </ul> : null
            }
        </nav>
    )
}

export default SideDrawer