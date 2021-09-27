import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";

const Layout = (props) => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")) || []);

  return (
    <div className="main-container">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item md={12}>
          {props?.children}
        </Grid>
        <Grid item xs={12} className="">
          {/* <Footer /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
