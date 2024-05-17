import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__all">
          <Link to={"/admin"}>
            <Button className="home__btn" variant="contained">
              ADMIN PANEL
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
