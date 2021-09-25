import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import "./App.css";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search-results" component={SearchResults} exact />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
{
  /*       
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup_input"
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup_input"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                className="modal__headerImage"
                src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png"
                alt="instagram"
                className="signInLabelImg"
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
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup_input"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                className="modal__headerImage"
                src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png"
                alt="instagram"
                className="signInLabelImg"
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
          <img
            className="app__headerImage"
            src="/images/logo.png"
            alt="instagram"
          />
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
          <HomeIcon fontSize="large" className="header_icon" />
          <NearMeOutlinedIcon fontSize="large" className="header_icon" />
          <ExploreOutlinedIcon fontSize="large" className="header_icon" />
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            className="header_icon"
          />
        </div>

        <div className="signupButton">
          {user ? (
            <Button
              onClick={() => auth.signOut()}
              variant="contained"
              color="secondary"
              className="signOutButton"
            >
              Logout
            </Button>
          ) : (
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
          )}
        </div>
      </div>

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
    </div> */
}
