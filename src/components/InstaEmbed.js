import React from "react";
import "./InstaEmbed.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

function InstaEmbed() {
  const classes = useStyles();

  return (
    <div className="instaEmbed">
      <img src="/images/logo.png" className="embed_image" alt="logo endorse" />
      <div className="embedText">
        <h4>
          Welcome to Eclectic Arts
          <span role="img" aria-label="img">
            👋
          </span>
          !!!
        </h4>

        <p>
          Eclectic Arts is an Online Social Media and Art Trading platform for
          Artists. The project is currently in development mode and is primarily
          made as a dissertation(Research Project) purpose of module "Individual
          Project" of College "Softwarica College of IT & E-Commerce"
          <br />
          <br />
          <b>P.S.</b> This project has been developed for learning purposes, and
          it has nothing to do with any othe platforms available and seem like
          it.
          <br />
          <br />
          <b>Features : </b>
          <ul>
            <li>User Authentication : Sign In and Sign Up</li>
            <li>Image Uploading for creating new Posts</li>
            <li>User can add Comments to the Posts</li>
            <li>An Awesome User-Interface</li>
            <li>Search and Sorting posts and artists</li>
            <li>Sell art through cart and keep record of sale and buy</li>
            <li>Provide feedback to Art Posts</li>
          </ul>
          <br />
        </p>
        <h4>
          Hope you have a Like this application, also exploring the application
          in and out
          <span role="img" aria-label="img">
            ✌
          </span>
          !!!
        </h4>
      </div>

      <div className="footer">
        <Avatar
          className={`avatar ${classes.large}`}
          alt="subhampreet"
          src="/images/avatar_author.jpg"
        />

        <div className="footer_content">
          <h5>Mandeep Maharjan</h5>
          <a
            href="https://www.instagram.com/_mandeep_m_/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              color="secondary"
              className="footer_follow"
            >
              Follow
            </Button>
          </a>
        </div>
      </div>
      <div className="copyright">
        <CopyrightIcon fontSize="small" className="copyright_icon" />
        2021 Eclectic Arts by &nbsp;
        <a
          href="https://github.com/mandeep919"
          target="_blank"
          rel="noreferrer"
        >
          Mandeep Maharjan
        </a>
      </div>
    </div>
  );
}

export default InstaEmbed;
