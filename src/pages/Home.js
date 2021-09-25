import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Story from "../components/Story";
import SearchIcon from "@material-ui/icons/Search";
import { auth, db } from "../firebase";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";

import InstaEmbed from "../components/InstaEmbed";
import Suggested from "../components/Suggested";

import HomeIcon from "@material-ui/icons/Home";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import ImageUpload from "../components/ImageUpload";

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

function Home() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out...
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
    console.log("usercheck", auth);
  }, []);

  return (
    <div className="App">
      <InstaEmbed />
      <Suggested />
      <Story />
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <div className="upload_message">
          <h3>Login to Create a Post 🚀 !!!</h3>
          <p>
            <b>For Creating a Post</b> you need to sign-in first. If not Signed
            Up, you can register yourself
            <a href="/signup">
              <u>here</u>
            </a>
            . Then click the "UPLOAD PHOTO" Button. Select a Photo from your
            device, add a suitable caption to the Post, and then click "CREATE
            POST" Button. Wait till the photo gets uploaded. And then BOOM!!!
            Your Post has been created(Scroll a bit if you don't find your post
            at the top).
            <br />
            <b>
              Hope you have a Great time exploring the Application
              <span role="img" aria-label="img">
                💖✌
              </span>
              !!!
            </b>
          </p>
          <Button
            onClick={() => setOpenSignIn(true)}
            className="upload_signInButton"
            color="secondary"
            variant="contained"
          >
            Sign In
          </Button>
        </div>
      )}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          avatar={post.avatar}
          user={user}
        />
      ))}
    </div>
  );
}

export default Home;
