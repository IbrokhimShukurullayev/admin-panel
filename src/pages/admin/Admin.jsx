import React from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <div className="container-full">
        <div className="admin-all">
          <div className="admin-left">
            <div className="admin-left-info">
              <div className="admin-left-info-1">
                <Link to={"/admin"}>
                  <h1>Admin</h1>
                </Link>
                <ul className="admin-left-list">
                  <NavLink to={"create-product"}>
                    <li>Create Product</li>
                  </NavLink>
                  <NavLink to={"manage-product"}>
                    <li>Manage Products</li>
                  </NavLink>
                  <NavLink to={"create-user"}>
                    <li>Create User</li>
                  </NavLink>
                  <NavLink to={"manage-user"}>
                    <li>Manage Users</li>
                  </NavLink>
                  <NavLink to={"create-category"}>
                    <li>Create Category</li>
                  </NavLink>
                  <NavLink to={"manage-category"}>
                    <li>Manage Category</li>
                  </NavLink>
                </ul>
              </div>
              <div className="admin-left-info-2">
                <Link to={"/"}>
                  <button>
                    <FaHandPointLeft />
                    Back To Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="admin-right">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
