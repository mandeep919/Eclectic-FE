import React, { useState, useEffect } from "react";
import { getAllUsers } from "../data/api";

function Messages() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((response) => {
        if (response.success === true) {
          setUsers(response.data);
        }
      })
      .catch((err) => {
        console.log("get users failed", err.message);
      });
  }, []);

  console.log(users);
  return (
    <div className="messages">
      <div className="message-wrap">
        <div className="frnds-list">
          {users &&
            users.map((user, index) => {
              return (
                <div key={index}>
                  <div className="frnd-item">
                    <div className="frnd-image">
                      <img src={user.userPP} alt="" />
                    </div>
                    <span>
                      <span className="name">
                        {user.firstName} {user.lastName}
                      </span>
                      <span className="latest-msg">{user.msg}</span>.
                      <span className="time">{user.time}</span>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="message-box">
          <div className="frnd-item">
            <div className="frnd-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
