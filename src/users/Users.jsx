import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { meAxios } from '../meAxios/meAxios';
import NewCompo from '../Alert/Alert';

const Users = (props)=>{
    const [user,setUser]=useState([]);
    const [mainuser,setMainUser]=useState([]);
    const navigte=useNavigate()
    const{Confirm,Alert}=props;
    useEffect(()=>{
        meAxios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            console.log(res);
            setUser(res.data)
            setMainUser(res.data)

        }).catch(erro=>{
            console.log("error oops");
        })
    },[])
const handleDelete=async(userId)=>{
    await Confirm(`ایا مطمینی`)
.then((willDelete) => {
  if (willDelete) {
    axios({
method:"DELETE",
url:`https://jsonplaceholder.typicode.com/users/${userId}`
    }).then(res=>{
        if(res.status===200){
const newUser=user.filter(u=>u.id =! userId)

setUser(newUser);
}
    })
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
}
const handleSearch=(e)=>{
    setUser(mainuser.filter(u=>u.name.includes(e.target.value)))
}
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearch}/>
                </div>
                <div className="col-2 text-start px-0">
                <Link to="/user/add">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                    </Link>
                </div>
            </div>
            {user.length ? (

            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
            {user.map(t => (
                <tr>
                        <td>{t.id}</td>
                        <td>{t.name}</td>
                        <td>{t.username}</td>
                        <td>{t.email}</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-2 pointer" onClick={()=>{navigte(`/user/add/${t.id}`)}}></i>
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

export default NewCompo(Users);