import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import ManageProduct from "../admin/manage-product/ManageProduct";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="container">
        <div className="home__all">
          <Link to={"/admin"}>
            <Button className="home__btn" variant="contained">
              ADMIN PANEL
            </Button>
          </Link>
        </div>
      </div> */}
      <Header/>
      <ManageProduct/>
    </div>
  );
};

export default Home;
