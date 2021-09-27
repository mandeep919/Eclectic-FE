import { Send } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { getAllUsers, getMessages } from "../data/api";

function Messages() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState([]);
  const [msgText, setMsgText] = useState("");

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

    getMessages()
      .then((response) => {
        if (response.success === true) {
          setMessage(response.data);
        }
      })
      .catch((err) => {
        console.log("get message SmsFailed", err.message);
      });
  }, []);

  const msgChange = (e) => setMsgText(e.target.value);
  // setMsgText({ ...msgText, [e.target.name]: e.target.value });

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
                      <span className="latest-msg">{user.latestMessage}</span>
                      <span className="time">{user.time}</span>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="message-box">
          <div className="msg-item">
            {message &&
              message.map((msg, index) => {
                return (
                  <>
                    {msg.type === "o" ? (
                      <div className="msg-row-l" key={index}>
                        <div className="msg-pp">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                            alt=""
                          />
                        </div>
                        <div className="msg-msg">
                          <span className="msg-time">{msg.time}</span>
                          <span className="msg-message">{msg.msg}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="msg-row-r" key={index}>
                        <div className="msg-msg">
                          <span className="msg-time">{msg.time}</span>
                          <span className="msg-message">{msg.msg}</span>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
          </div>
          <div className="message-now">
            <input
              type="text"
              placeholder="Type your message"
              value={msgText}
              name="msgText"
              onChange={(e) => msgChange(e)}
              className="message_input"
            />
            <Send className="send-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
