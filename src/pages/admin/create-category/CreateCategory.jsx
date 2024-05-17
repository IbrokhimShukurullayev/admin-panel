import React, { useEffect, useState } from "react";
import { useCreateCategoryMutation } from "../../../context/categoryApi";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const [title, setTitle] = useState("");
  const [createCategory, { data: createCategoryData, isLoading, error }] =
    useCreateCategoryMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({ title });
  };
  useEffect(() => {
    if (createCategoryData) {
      toast.success("Malumot yaratildi");
    }
    if (error) {
      toast.error("Malumot toliq kiritilmadi");
    }
  }, [createCategoryData, error]);
  return (
    <div className="container">
      <div className="create-pr">
        <h1>Create Category</h1>
        <form onSubmit={handleSubmit} className="create-pr-form" action="">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <button className="create-pr-btn">
            Submit <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
