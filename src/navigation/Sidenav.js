import React, { useContext } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { LoginContext } from "../context/LoginContext";

function Sidenav() {
  const { user } = useContext(LoginContext);
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__btn">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__btn">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__btn">
          <ExploreIcon />
          <span>Explor</span>
        </button>
        <button className="sidenav__btn">
          <SlideshowIcon />
          <span>Slide</span>
        </button>
        <button className="sidenav__btn">
          <ChatIcon />
          <span>Message</span>
        </button>
        <button className="sidenav__btn">
          <FavoriteBorderIcon />
          <span>Favorite</span>
        </button>
        <button className="sidenav__btn">
          <AddCircleOutlineIcon />
          <span>Add</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__btn">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
