import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageUser from "./pages/admin/manage-user/ManageUser";
import CreateCategory from "./pages/admin/create-category/CreateCategory";
import ManageCategory from "./pages/admin/manage-category/ManageCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="manage-category" element={<ManageCategory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
