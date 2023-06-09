import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import morteza from './morteza.module.css'
import { Route,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AddUser from './adduser/addUser';
const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }
const [title,setTitle]=useState(true);
    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} ${morteza.add}fas fa-bars text-dark m-2 pointer`} 
            onClick={handleShowMenu}
            ></i>
            <Routes>
            <Route path='/user' element={title ? <Users/>:<Navigate replace to='/posts'/>}></Route>
            <Route path='/posts' element={<Posts/>}></Route>
            <Route path='/user/add/' element={<AddUser/>}>
            <Route path=':userId' />
            </Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/todos' element={<Todos/>}></Route>
            </Routes>                                                
        </div>
    )

}

export default Content;