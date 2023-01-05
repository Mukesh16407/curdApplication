import React, { useContext, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { addContext, deleteContext, updateContext } from "../context/ContextProvider";


export const Home = () => {
  const [getUserData, setUserData] = useState([]);
  const { userData } = useContext(addContext);
  const {updateData} = useContext(updateContext);
  const {deleteData, setDeleteData} = useContext(deleteContext)


  const getData = async () => {
    try {
      const res = await fetch("api/users/getdata", {
        method: "GET",
      });

      const data = await res.json();
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const res2 = await fetch(`api/users/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const deleteData = await res2.json();

      if (!deleteData) {
        console.log("error");
      } else {
        getData();
        alert(deleteData.message);
        setDeleteData(deleteData)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userData ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{userData.name}</strong> User Added Successfully.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}

     {updateData ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{updateData.name}</strong> User update Successfully.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
      {
        deleteData?(
          <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>{deleteData.name}</strong> User delete Successfully.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        ):(
          ""
        )
      }

      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <NavLink to={"/register"} className="btn btn-primary">
              Add Data
            </NavLink>
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
              {getUserData.map((item, id) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{id + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.work}</td>
                    <td>{item.mobile}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/view/${item._id}`}>
                        {" "}
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`/edit/${item._id}`}>
                        <button className="btn btn-primary">
                          <ModeEditIcon />
                        </button>
                      </NavLink>

                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(item._id)}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
