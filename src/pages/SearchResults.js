import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import PostsTile from "../components/PostsTile";
import { fetchSearchPosts } from "../data/api";

function SearchResults(props) {
  const [user] = useState(JSON.parse(localStorage.getItem("user")) || []);
  const [posts, setPosts] = useState([]);
  const [color, setColor] = useState("");

  const searchtext = window.location.pathname.replace("/search-results/", "");

  useEffect(() => {
    fetchSearchPosts(searchtext)
      .then((response) => {
        if (response.success === true) {
          setPosts(response.data);
        }
      })
      .catch((err) => {
        console.log("get search posts error");
      });
  }, []);
  console.log("posts", posts);

  return (
    <>
      <PostsTile />
    </>
    // <div className="search-results-page">
    //   <Grid container>
    //     <Grid item md={12} className="">
    //       <div className="search-results-header">
    //         <div className="results-head-top">
    //           <div className="results-for">
    //             <h2>Results for {propsTitle}</h2>
    //           </div>
    //           <div className="results-sd">
    //             {posts.length > 0 ? (
    //               ""
    //             ) : (
    //               <>Results not found for {`${propsTitle} `}</>
    //             )}
    //           </div>
    //         </div>
    //         <div className="results-head-bottom">
    //           <div className="reults-total">
    //             Total {posts.length} posts related found
    //           </div>
    //           <div className="results-sort-wrap">
    //             Sort by
    //             <Link to="/" className="button-style">
    //               Number of answer
    //             </Link>
    //             <Link href="" className="button-style">
    //               Votes
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </Grid>
    //     <Grid item md={12} className="">
    //       <div className="search-results-item">
    //         {posts.length > 0 ? (
    //           <>
    //             {posts.map((post) => (
    //               <Posts key={post.id} post={post} color={color} />
    //             ))}
    //           </>
    //         ) : (
    //           <div className="results-not-found">
    //             <div className="contatiner">
    //               <div className="not-found-text">
    //                 Results not found for {`${propsTitle}, Try `}
    //                 <Link
    //                   to={user.token ? "/ask-question" : "/login"}
    //                   className="btn btn-primary"
    //                 >
    //                   Ask Question
    //                 </Link>
    //               </div>
    //               <div className="not-found-img-wrap">
    //                 <img src='/images/notfound.png' alt="Results not found" />
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}

export default SearchResults;
