import React from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../../context/productApi";
import { toast } from "react-toastify";

const ManageProduct = () => {
  const {
    data: manageProductGet,
    isLoading,
    error,
  } = useGetProductQuery({ limit: 4, count: 1 });
  const [
    deleteProduct,
    { data: deleteProductData, error: deleteProductError },
  ] = useDeleteProductMutation();
  let product = manageProductGet?.data.map((el) => (
    <div className="manage-pr-card" key={el.id}>
      <div className="manage-pr-card-img">
        <img src={el.urls[0]} alt="" />
      </div>
      <div className="manage-pr-card-info">
        <p className="manage-pr-card-info-cat">{el.category}</p>
        <p className="manage-pr-card-info-title">{el.title}</p>
        <div className="manage-pr-card-price">
          <p className="manage-pr-card-info-price">${el.price}</p>
          <p className="manage-pr-card-info-old-price">${el.oldPrice}</p>
        </div>
        <button
          className="manage-pr-card-btn"
          onClick={() => {
            deleteProduct(el.id);
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
      <div className="manage-product">
        <h1 className="manage-product-h1">Manage Product</h1>
        <div className="manage-wrapper">{product}</div>
      </div>
    </div>
  );
};

export default ManageProduct;
