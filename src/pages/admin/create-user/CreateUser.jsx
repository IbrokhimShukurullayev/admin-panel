import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useCreateUsersMutation } from "../../../context/userApi";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState([]);
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { data: createUserData, isLoading, error }] =
    useCreateUsersMutation();

  useEffect(() => {
    if (createUserData) {
      toast.success("Malumot yaratildi");
    }
    if (error) {
      toast.error("Malumot toliq kiritilmadi");
    }
  }, [createUserData, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      FirstName: firstName,
      LastName: lastName,
      phones: [number],
      role,
      UserName: userName,
      password,
      isActive: true,
    };
    createUser(user);
    console.log(user);
  };
  return (
    <div className="create-product">
      <div className="container">
        <div className="create-pr">
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit} className="create-pr-form" action="">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder="Phone Number"
            />
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
              placeholder="Role"
            />
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="create-pr-btn">
              Submit <IoIosSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
