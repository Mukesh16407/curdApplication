import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams} from 'react-router-dom'
import { updateContext } from "../context/ContextProvider";



export const Edit = () => {


  const {id} = useParams("");
  const navigate = useNavigate();
  const { setUpdate} = useContext(updateContext)
  const [inputVal,setInputVal] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:""
  })

  const setData =(e)=>{
  const {name,value} = e.target;
  setInputVal((preVal)=>{
    return {
      ...preVal,[name]:value
    }
  })
  }
  const getSingleData = async()=>{
    
    try{
      const res =  await fetch(`/api/users/getuser/${id}`,{
        method:"GET",
       })
       
       const data = await res.json();
       setInputVal(data.data);
       setUpdate(data.data)
    }catch(error){
      console.log(error.message)
    }
  }
 useEffect(()=>{
  getSingleData()
 },[])

 const updateUser=async(e)=>{
 e.preventDefault();
 const {name,email,age,mobile,work,add,desc} =inputVal;
 try{
  const res =  await fetch(`/api/users/update/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,
      email,
      age,
      mobile,
      work,
      add,
      desc
    })
   })
   
   const data = await res.json();
    if(res.success){
      console.log(data)
      alert("Data Added");
    }else{
      alert(data.message);
      navigate('/')
      console.log(data.message)
    }

 }catch(error){
  console.log(error)
 }
 

 }
  return (
    <div className="container">
      <form className="mt-5">
        <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12" >
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={inputVal.name}
            onChange={setData}
            className="form-control"
            id="exampleInputName"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email 
          </label>
          <input
            type="email"
            name="email"
            value={inputVal.email}
            onChange={setData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
       
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={inputVal.age}
            onChange={setData}
            className="form-control"
            id="exampleInputAge"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputMobile" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            name="mobile"
            value={inputVal.mobile}
            onChange={setData}
            className="form-control"
            id="exampleInputMobile"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputWork" className="form-label">
            Work
          </label>
          <input
            type="text"
            name="work"
            value={inputVal.work}
            onChange={setData}
            className="form-control"
            id="exampleInputWork"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="add"
            value={inputVal.add}
            onChange={setData}
            className="form-control"
            id="exampleInputAddress"
          />
        </div>
        <div className="mb-3 col-lg-12 col-md-12 col-12">
          <label htmlFor="exampleInputWork" className="form-label">
            Description
          </label>
          <textarea
             name="desc"
             value={inputVal.desc}
             onChange={setData}
            type="text"
            className="form-control"
            id="exampleInputWork"
            cols={"5"}
            rows={"10"}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={updateUser}>
          Submit
        </button>
        </div>
        
      </form>
    </div>
  );
};
