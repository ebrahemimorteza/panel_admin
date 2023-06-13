import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { meAxiosPost } from '../meAxios/meAxiospost';

import NewCompo from '../Alert/Alert';

const Posts = (props)=>{
    const navigte = useNavigate()
    const[post, setPost]=useState([])
    const[serch, setSerch]=useState([])
    useEffect(()=>{
meAxiosPost.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
setPost(res.data)
setSerch(res.data)

}).catch(err=>{
    console.log("eror");
})
    },[])
    const handleSearch=(e)=>{
     setPost(serch.filter(u=>u.body.includes(e.target.value)))
    }
   const handleDelete=()=>{

   }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearch}/>
                </div>
                <div className="col-2 text-start px-0">
                <Link to="/post/add">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                    </Link>
                </div>
            </div>
            {post.length ? (

            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ایدی</th>
                        <th>ایدی کاربری</th>
                        <th>موضوع</th>
                        <th>متن</th>
                    </tr>
                </thead>
                <tbody>
            {post.map(t => (
                <tr>
                        <td>{t.id}</td>
                        <td>{t.userId}</td>
                        <td>{t.title}</td>
                        <td>{t.body}</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-2 pointer" onClick={()=>{navigte(`/posts/add/${t.id}`)}}></i>
                            <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>{handleDelete(t.id)}}></i>
                        </td>
                    </tr>

            ))}
                </tbody>
            </table>
            
):(
<h1>کاربری وجود ندارد</h1>
)}
        </div>
    )

}

export default Posts;