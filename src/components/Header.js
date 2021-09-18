import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userImage from "../media/user.png";
import Logo from "../media/logo.png";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

toast.configure();

const Header = (props) => {
  const [user, setUser] = useState(true);
  useEffect(() => {}, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="nav-inner">
        <div className="logo-wrap">
          <a href="/" className="navbar-brand">
            <img src={Logo} className="logo" alt="Logo" />
          </a>
        </div>
        <form className="navbar-form resp-show form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search-posts1"
              className="form-control"
              placeholder="Search questions here..."
            />
            <div className="btn-search">
              <span className="input-group-text">
                <SearchIcon id="search-button" className="" />
              </span>
            </div>
          </div>
        </form>

        <div className="navbar-nav ml-auto action-buttons">
          <div className="notification-icon-wrap">
            <button className="btn-update-password">
              <NotificationsActiveIcon />
            </button>
            {user.notification ? (
              <div className="">
                <div>
                  <h5 className="mb-3">
                    <b>Notifications</b>
                  </h5>
                  <li className="notifscore mb-2">Aman liked your picture</li>
                  <li className="notifscore mb-2">Aman liked your picture</li>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {user ? (
            <>
              <a href="/login" className="nav-link">
                <b>Login</b>
              </a>
              <a href="/signup" className="btn btn-primary">
                <b>Sign up</b>
              </a>
            </>
          ) : (
            <>
              <div className="account-wrap">
                <IconButton
                  className="account-icon-button"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                >
                  {/* <AccountCircleIcon className="account-icon" /> */}
                  <div className="img-wrap">
                    <img src={userImage} alt="" />
                  </div>
                </IconButton>
                <div className="account-name">
                  <span className="block">Mandeep Maharjan</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
