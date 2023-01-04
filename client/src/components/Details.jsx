import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Details = () => {

  const {id} = useParams("");

  const [singledata,setSingleData] = useState([]);
  

  const getSingleData = async()=>{
    
    try{
      const res =  await fetch(`/api/users/getuser/${id}`,{
        method:"GET",
       })
       
       const data = await res.json();
       setSingleData(data.data)
    }catch(error){
      console.log(error.message)
    }
  }
 useEffect(()=>{
  getSingleData()
 },[])

 

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome to {singledata.name}</h1>
      <Card sx={{ maxWidth: 900 }}>
        <CardContent>
       
            <div className="row">
            <div className="left-view col-lg-6 col-md-6 col-12 ">
            <img src="/images.png" alt="profile" style={{ width: 50 }} />
            <h3 className="mt-3">
              Name:<span>{singledata.name}</span>
            </h3>
            <h3 className="mt-3">
              Age:<span >{singledata.age}</span>
            </h3>
            <p className="mt-3"><MailOutlineIcon/>Email:<span>{singledata.email}</span></p>
            <p className="mt-3"><WorkIcon/>Occp:<span>{singledata.work}</span></p>
          </div>
          <div className="right-view col-lg-6 col-md-6 col-12">
          <div className="add-btn">
            <button className="btn btn-primary mx-2"><ModeEditIcon/></button>
                <button className="btn btn-danger"><DeleteOutlineIcon/></button>
            </div>
          <p className="mt-5"><SmartphoneIcon/>Phone:<span>{singledata.mobile}</span></p>
          <p className="mt-3"><PlaceIcon/>Place:<span>{singledata.add}</span></p>
          <p className="mt-3">Description:<span>{singledata.desc}</span></p>
          </div>

            </div>
         
        </CardContent>
      </Card>
    </div>
  );
};
