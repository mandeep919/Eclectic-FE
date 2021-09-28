import React, { useState, useEffect } from "react";
import InfoIcon from "@material-ui/icons/Info";
import { Grid } from "@material-ui/core";

const Profile = () => {
  const [user, setUser] = useState({
    user: JSON.parse(localStorage.getItem("user")) || null,
  });

  useEffect(() => {});

  return (
    <div className="user-profile">
      <Grid container>
        <Grid item md={4}>
          <div className="card shadow-sm">
            <div className="card-header bg-transparent text-center">
              <img
                className="profile_img"
                src="https://source.unsplash.com/600x300/?student"
                alt="student dp"
              />
              <h2>{user.user.userName}</h2>
              <a href="/profile-update">
                <p>Update your profile</p>
              </a>
            </div>
            <div className="card-body">
              <p className="mb-0">
                <strong className="pr-1">First-Name: </strong>
                {user.user.firstName}
              </p>
              <p className="mb-0">
                <strong className="pr-1">Last-Name: </strong>
                {user.user.lastName}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item md={8}>
          <div className="card shadow-sm">
            <div className="card-header bg-transparent border-0">
              <h3 className="mb-0">
                <InfoIcon />
                General Information
              </h3>
            </div>
            <div className="card-body pt-0">
              <table className="table table-bordered">
                <tr>
                  <th width="30%">Email</th>
                  <td width="2%">:</td>
                  <td>{user.user.email}</td>
                </tr>
                <tr>
                  <th width="30%">Address </th>
                  <td width="2%">:</td>
                  <td>{user.user.address}</td>
                </tr>
                <tr>
                  <th width="30%">Mobile</th>
                  <td width="2%">:</td>
                  <td>{user.user.mobile}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="card shadow-sm update-info">
            <div className="card-header bg-transparent border-0">
              <h3 className="mb-0">
                <InfoIcon />
                Other Information
              </h3>
            </div>
            <div className="card-body pt-0">
              <p>Update information..</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Profile;
