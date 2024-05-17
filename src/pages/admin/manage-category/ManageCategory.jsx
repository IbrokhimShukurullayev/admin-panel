import React from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../context/categoryApi";
import { toast } from "react-toastify";

const ManageCategory = () => {
  const { data: manageCategoryGet, isLoading, error } = useGetCategoryQuery();
  const [
    deleteCategory,
    { data: deleteCategoryData, error: deleteCategoryError },
  ] = useDeleteCategoryMutation();

  let category = manageCategoryGet?.data.map((el) => (
    <div key={el.id} className="category-get">
      <div className="category-card">
        <h1>{el.title}</h1>
        <button
          className="category-btn"
          onClick={() => {
            deleteCategory(el.id);
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
      <div className="category">
        <h1 className="category-h1">Manage Category</h1>
        <div className="category-all">{category}</div>
      </div>
    </div>
  );
};

export default ManageCategory;
