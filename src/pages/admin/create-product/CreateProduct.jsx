import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useCreateProductMutation } from "../../../context/productApi";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [units, setUnits] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);

  const [createProduct, { data: createProductData, isLoading, error }] =
    useCreateProductMutation();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files);
    toast.success("Rasm yuklandi");
  };

  useEffect(() => {
    if (createProductData) {
      toast.success("Malumot yaratildi");
    }
    if (error) {
      toast.error("Malumot toliq kiritilmadi");
    }
  }, [createProductData, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let productForm = new FormData();
    productForm.append("title", title);
    productForm.append("price", price);
    productForm.append("oldPrice", oldPrice);
    productForm.append("description", description);
    productForm.append("category", category);
    productForm.append("units", units);
    productForm.append("info", {});
    Array.from(selectedFile).forEach((el) => {
      productForm.append("files", el, el.name);
    });
    createProduct(productForm);
  };
  return (
    <div className="create-product">
      <div className="container">
        <div className="create-pr">
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit} className="create-pr-form" action="">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="price"
            />
            <input
              value={oldPrice}
              onChange={(e) => setOldPrice(e.target.value)}
              type="number"
              placeholder="old-price"
            />
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="category"
            />
            <input
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              type="text"
              placeholder="units"
            />
            <label htmlFor="file-input" className="custom-file-input-label">
              Choose a file
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              multiple
            />
            <div className="create-pr-input-img">
              <p>
                Selected Img:{" "}
                {Array.from(selectedFile)
                  ?.map((el) => URL.createObjectURL(el))
                  ?.map((el, inx) => (
                    <img key={inx} src={el} alt="" />
                  ))}
              </p>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="10"
              placeholder="description"
              name=""
              id=""
            ></textarea>
            <button className="create-pr-btn">
              Submit <IoIosSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
