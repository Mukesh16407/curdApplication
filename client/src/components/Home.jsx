import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


export const Home = () => {

  const [getUserData, setUserData] = useState([]);

  const getData = async()=>{
   
    try{
     const res =  await fetch('api/users/getdata',{
       method:"GET",
      })
      
      const data = await res.json();
       setUserData(data.data)

    }catch(error){
     console.log(error)
    }
 
}
useEffect(()=>{
 getData();
 
},[])

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to={'/register'} className="btn btn-primary">Add Data</NavLink>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Work</th>
              <th scope="col">phone No</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getUserData.map((item,id)=>{
              return(
                <tr key={item._id}>

                <th scope="row">{id+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.work}</td>
                <td>{item.mobile}</td>
                <td className="d-flex justify-content-between">
                  <NavLink to={`/view/${item._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon/></button></NavLink>
                  <NavLink to={`/edit/${item._id}`}><button className="btn btn-primary"><ModeEditIcon/></button></NavLink>
                  
                  <button className="btn btn-danger"><DeleteOutlineIcon/></button>
                </td>
              </tr>
              )
            })}
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
