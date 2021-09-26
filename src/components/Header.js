import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { signup, login, getUser } from "../data/api";
import Cart from "./Cart";
import { toast } from "react-toastify";
import {
  ShoppingCart,
  FavoriteBorderOutlined,
  Home,
  NearMeOutlined,
} from "@material-ui/icons";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 280,
    height: 360,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [initials, setInitials] = useState("");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [signupData, setSignupData] = useState({
    userNameS: "",
    firstNameS: "",
    lastNameS: "",
    emailS: "",
    passswordS: "",
  });
  const [loginData, setLoginData] = useState({
    userNameL: "",
    passwordL: "",
  });

  useEffect(() => {
    if (user) {
      setInitials(user.firstName[0].toUpperCase());
    }
  }, [user]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { userNameS, firstNameS, lastNameS, emailS, passwordS } = signupData;

  const signupChange = (e) =>
    setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const { userNameL, passwordL } = loginData;

  const loginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  useEffect(() => {}, []);

  const signUp = (e) => {
    e.preventDefault();
    signup(signupData).then((response) => {
      console.log("signupresp", response);
      if (response.success === true) {
        toast.success(response.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setOpen(false);
      }
    });
  };

  const signIn = (event) => {
    event.preventDefault();
    console.log(loginData);
    login(loginData)
      .then((response) => {
        console.log("signinresp", response);
        if (response.success === true) {
          toast.success(response.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          setOpenSignIn(false);
        }
      })
      .catch((err) => {
        console.log("signin Error " + err);
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const Logout = () => {
    localStorage.clear();
    toast.success("Logout Succesfull !!!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    window.location.href = "/";
  };

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="modal__headerImage"
                src="/images/logo.png"
                alt="Eclectic"
              />
            </center>
            <Input
              type="text"
              placeholder="First Name"
              className="signup_input"
              value={firstNameS}
              name="firstNameS"
              onChange={(e) => signupChange(e)}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastNameS}
              name="lastNameS"
              onChange={(e) => signupChange(e)}
              className="signup_input"
            />
            <Input
              type="text"
              placeholder="Username"
              value={userNameS}
              name="userNameS"
              onChange={(e) => signupChange(e)}
              className="signup_input"
            />
            <Input
              type="text"
              placeholder="Email"
              value={emailS}
              name="emailS"
              onChange={(e) => signupChange(e)}
              className="signup_input"
            />
            <Input
              type="password"
              placeholder="Password"
              value={passwordS}
              name="passwordS"
              onChange={(e) => signupChange(e)}
              className="signup_input"
            />
            <Button
              type="submit"
              onClick={signUp}
              variant="contained"
              color="secondary"
            >
              Sign Up
            </Button>
            <div className="signInLabel">
              <img
                className="modal__headerImage signInLabelImg"
                src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png"
                alt="instagram"
              />
              <p className="signInLabelText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                Sed ut perspiciatis unde omnis iste natus error ut perspiciatis
                unde omnis iste natus error{" "}
              </p>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        className="cart-modal"
        open={openCart}
        onClose={() => setOpenCart(false)}
      >
        <div style={modalStyle} className={`cart-inner ${classes.paper}`}>
          <Cart />
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="modal__headerImage"
                src="/images/logo.png"
                alt="instagram"
              />
            </center>

            <Input
              type="text"
              placeholder="Username"
              name="userNameL"
              value={userNameL}
              onChange={(e) => loginChange(e)}
              className="signup_input"
            />
            <Input
              type="password"
              placeholder="Password"
              name="passwordL"
              value={passwordL}
              onChange={(e) => loginChange(e)}
              className="signup_input"
            />

            <Button
              type="submit"
              onClick={signIn}
              variant="contained"
              color="secondary"
            >
              Sign In
            </Button>

            <div className="signInLabel">
              <img
                className="modal__headerImage signInLabelImg"
                src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png"
                alt="instagram"
              />
              <p className="signInLabelText">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                Sed ut perspiciatis unde omnis iste natus error ut perspiciatis
                unde omnis iste natus error{" "}
              </p>
            </div>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <div className="logo-wrap">
          <Link to="/">
            <img
              className="app__headerImage"
              src="/images/logo.png"
              alt="instagram"
            />
          </Link>
        </div>

        <div className="searchForm">
          <form>
            <SearchIcon className="searchIcon" fontSize="small" />
            <input
              type="text"
              id="filter"
              placeholder="Search"
              className="searchBarInput"
            />
          </form>
        </div>

        <div className="header_icons">
          <Link to="/">
            <Home fontSize="large" className="header_icon" />
          </Link>
          <Link to="/messages">
            <NearMeOutlined fontSize="large" className="header_icon" />
          </Link>
          <span onClick={() => setOpenCart(true)}>
            <ShoppingCart fontSize="large" className="header_icon" />
          </span>
          <span onClick={() => setOpen(true)}>
            <FavoriteBorderOutlined fontSize="large" className="header_icon" />
          </span>
        </div>

        <div className="signupButton">
          {!user ? (
            <>
              <div className="app__loginContainer">
                <Button
                  onClick={() => setOpenSignIn(true)}
                  className="signInButton"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => setOpen(true)}
                  variant="contained"
                  color="secondary"
                >
                  Sign Up
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="account-wrap" onClick={handleClick}>
                <IconButton
                  className="account-icon-button"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <div className="img-wrap">
                    {user.userpp ? (
                      <img src={user.userpp} alt="" />
                    ) : (
                      <span className="initials-wrap">{initials}</span>
                    )}
                  </div>
                </IconButton>
                <div className="account-name">
                  <span className="block">{user.userName}</span>
                </div>
              </div>
              <Menu
                className="menu-nav"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} className="nav-acc-menu-list">
                  <Link to="/profile">Account</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="nav-acc-menu-list">
                  <Link to="/settings">Settings</Link>
                </MenuItem>

                <MenuItem onClick={handleClose} className="nav-acc-menu-list">
                  <Button
                    onClick={() => Logout()}
                    variant="contained"
                    color="secondary"
                    className="signOutButton"
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
