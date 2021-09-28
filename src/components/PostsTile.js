import React from "react";

function PostsTile(props) {
  const items = props.post;
  console.log("jhkjf");
  // var posts = Array.from(props.post);
  console.log("pp", items);

  return (
    <>
      <div className="post-wrap">
        {/* {items.map((item, index) => {
          return ( */}
        <div className="post-item">
          <div className="item-img">
            <img src={items.postImage} alt="" />
          </div>
          <b>{items.postTitle}</b>
          <p>Art by {items.userName}</p>
          <p>${items.price}</p>
        </div>
        {/* );
        })} */}
      </div>
    </>
  );
}

export default PostsTile;
