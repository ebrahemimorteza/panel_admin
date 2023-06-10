
import React, { useEffect, useState } from 'react';
import { useParams , Outlet,useNavigate,useLocation } from 'react-router';
import style from '../style.module.css'
import axios from 'axios';
import swal from 'sweetalert';
import { meAxios } from '../meAxios/meAxios';

const AddUser = ()=>{

    const {userId} = useParams();
    const Navigate =useNavigate();
    const location =useLocation();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        address:{
            street: "",
      suite: "",
      city: "",
      zipcode: "",
        }
    })
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>{
        setUser({
            name:res.data.name,
        username:res.data.username,
        email:res.data.email,
        address:{
            street: res.data.address.street,
      suite: res.data.address.suite,
      city: res.data.address.city,
      zipcode: res.data.address.zipcode,
        }})
    })
    },[])
    console.log(userId);
const handleInsert=(e)=>{
    e.preventDefault();
    if(!userId){
        meAxios.post('/users', user).then(res=>{
            swal("save", {
      icon: "success",
    });
        })
    }else{

        meAxios.put(`/users/${userId}`, user).then(res=>{
            console.log(res)
            swal("edit", {
      icon: "success",
    });
        })
    }
}
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر" }
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleInsert} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام و نام خانوادگی</label>
                        <input type="text" class="form-control" value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام کاربری</label>
                        <input type="text" class="form-control" value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">ایمیل</label>
                        <input type="email" class="form-control" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
                    </div>
                    <div class="mb-3 row">
                        <label for="exampleInputEmail1" class="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="شهر" value={user.address.city} onChange={(e)=>{setUser({...user,address:{...user.address,city:e.target.value}})}}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="خیابان" value={user.address.street} onChange={(e)=>{setUser({...user,address:{...user.address,street:e.target.value}})}}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="ادامه آدرس" value={user.address.suite} onChange={(e)=>{setUser({...user,address:{...user.address,suite:e.target.value}})}}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="کد پستی" value={user.address.zipcode} onChange={(e)=>{setUser({...user,address:{...user.address,zipcode:e.target.value}})}}/>
                        </div>
                    </div>

                    <div className="col-12 text-start">
                        <button type="button" class="btn btn-danger ms-2" onClick={()=>Navigate('/user',{state:{x:"react"}})}>بازگشت</button>
                        <button type="submit" class="btn btn-primary">
                        {userId ? "ویرایش " : "افزودن " }
                        </button>
                    </div>
                </form>
            </div>
            {/* <Outlet/> */}
        </div>
    )
}

export default AddUser;