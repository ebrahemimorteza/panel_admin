import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right:0} : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                <NavLink className={({isActive})=>{return isActive ? "Active_nav" : "{}"}} to="/user">
                <li>
                    کاربران
                </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? "Active_nav" : "{}"}} to="/posts">
                <li>
                    پست ها
                </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? "Active_nav" : "{}"}} to="/gallery">
                <li>
                    گالری
                </li>
                </NavLink>
                <NavLink className={({isActive})=>{return isActive ? "Active_nav" : "{}"}} to="/todos">
                <li>
                   کارها
                </li>
                </NavLink>
            </ul>
        </div>
    )

}

export default Sidebar;