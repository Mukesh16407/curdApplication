import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className="btn btn-primary">Add Data</button>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">phone No</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Meet</td>
              <td>meet@gmail.com</td>
              <td>WebDeveloper</td>
              <td>0987654321</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><RemoveRedEyeIcon/></button>
                <button className="btn btn-primary"><ModeEditIcon/></button>
                <button className="btn btn-danger"><DeleteOutlineIcon/></button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
