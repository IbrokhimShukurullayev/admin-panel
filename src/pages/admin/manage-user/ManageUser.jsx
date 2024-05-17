import React from "react";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../../context/userApi";
import { toast } from "react-toastify";

const ManageUser = () => {
  const { data: manageUserGet, isLoading, error } = useGetUserQuery();
  const [deleteUser, { data: deleteUserData, error: deleteUserError }] =
    useDeleteUserMutation();
  let user = manageUserGet?.data.map((el) => (
    <div key={el.id} className="card">
      <div className="car-img">
        <h1>
          {el.FirstName.slice(0, 1).toUpperCase()}
          {el.LastName.slice(0, 1).toUpperCase()}
        </h1>
      </div>
      <div className="card-info">
        <p className="card-info-name">
          {el.FirstName.charAt(0).toUpperCase() + el.FirstName.slice(1)}{" "}
          {el.LastName.charAt(0).toUpperCase() + el.LastName.slice(1)}
        </p>
        <p className="card-info-role">
          Role: <span>{el.role}</span>
        </p>
        <p className="card-info-number">
          Number: <span> {el.phones}</span>
        </p>
        <p className="card-info-role">
          Username: <span>{el.UserName}</span>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            deleteUser(el.id);
            toast.info("Malumot ochirildi");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="manage-user">
        <h1 className="manage-user-h1">Manage User</h1>
        <div className="manage-wrapper">{user}</div>
      </div>
    </div>
  );
};

export default ManageUser;
