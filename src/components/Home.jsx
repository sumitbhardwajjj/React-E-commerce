import React from "react";
import Navbar from "./navbar";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="nav-4">
        <div className="header">
          <h1 className="">Welcome to my website</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            ad, harum qui explicabo iusto maxime possimus ipsam consequuntur
            quae debitis voluptatum eligendi atque, fugit unde fuga quia
            praesentium expedita asperiores odit error incidunt quidem minus.
            Recusandae illum est, eius molestiae modi veniam, ullam ratione
            quae, vitae quam fugit architecto ut?
          </p>
          <div className="nav-7">
          <NavLink to='/product'> <button className="nav-6">Explore</button></NavLink>
          </div>
        </div>
        <div className="nav-3">
          <img
            className="nav-2"
            src="https://m.media-amazon.com/images/I/61xiIZSwKML._SY741._SX._UX._SY._UY_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
