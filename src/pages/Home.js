import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Story from "../components/Story";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

import InstaEmbed from "../components/InstaEmbed";
import Suggested from "../components/Suggested";

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
  const [openSignIn, setOpenSignIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {}, [user]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={3}>
          <InstaEmbed />
        </Grid>
        <Grid item xs={6}>
          <Story />
          {user ? (
            <ImageUpload username={user.displayName} user={user} />
          ) : (
            <div className="upload_message">
              <h3>Login to Create a Post 🚀 !!!</h3>
              <p>
                <b>For Creating a Post</b> you need to sign-in first. If not
                Signed Up, you can register yourself
                <a href="/signup">
                  <u>here</u>
                </a>
                . Then click the "UPLOAD PHOTO" Button. Select a Photo from your
                device, add a suitable caption to the Post, and then click
                "CREATE POST" Button. Wait till the photo gets uploaded. And
                then BOOM!!! Your Post has been created(Scroll a bit if you
                don't find your post at the top).
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
        </Grid>

        <Grid item xs={3}>
          <Suggested />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
