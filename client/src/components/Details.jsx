import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PlaceIcon from '@mui/icons-material/Place';

export const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome to Mukesh kumar</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
       
            <div className="row">
            <div className="left-view col-lg-6 col-md-6 col-12 ">
            <img src="/images.png" alt="profile" style={{ width: 50 }} />
            <h3 className="mt-3">
              Name:<span>Mukesh Kumar</span>
            </h3>
            <h3 className="mt-3">
              Age:<span >25</span>
            </h3>
            <p className="mt-3"><MailOutlineIcon/>Email:<span>mkshk@gmail.com</span></p>
            <p className="mt-3"><WorkIcon/>Occp:<span>WebDeveloper</span></p>
          </div>
          <div className="right-view col-lg-6 col-md-6 col-12">
          <div className="add-btn">
            <button className="btn btn-primary mx-2"><ModeEditIcon/></button>
                <button className="btn btn-danger"><DeleteOutlineIcon/></button>
            </div>
          <p className="mt-5"><SmartphoneIcon/>Phone:<span>9110567893</span></p>
          <p className="mt-3"><PlaceIcon/>Place:<span>Sheikhpura</span></p>
          <p className="mt-3">Description:<span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, pariatur!</span></p>
          </div>

            </div>
         
        </CardContent>
      </Card>
    </div>
  );
};
