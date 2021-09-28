import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import PostsTile from "../components/PostsTile";
import { fetchSearchPosts } from "../data/api";
import { ChevronRight } from "@material-ui/icons";

function SearchResults(props) {
  const [posts, setPosts] = useState([]);

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
    <div className="search-results-page">
      <Grid container>
        <Grid item md={12} className="">
          <div className="search-results-header">
            <div className="results-for">
              <h2>Results for {searchtext}</h2>
            </div>
            <div className="results-sd">
              {posts.length > 0 ? (
                ""
              ) : (
                <>Results not found for {`${searchtext} `}</>
              )}
            </div>
            <div className="reults-total">
              Total {posts.length} posts related found
            </div>
          </div>
        </Grid>
        <Grid item md={4} className="">
          <div className="results-sort">
            <div className="results-sort-head">Sort by</div>
            <div className="sort-lists">
              <div className="list-sort">
                <h4>All Categories</h4>
                <ul className="allcat">
                  <li>
                    Photography <ChevronRight className="allcat" />
                  </li>
                  <li>
                    Drawing & Illustration <ChevronRight className="allcat" />
                  </li>
                  <li>
                    Painting <ChevronRight className="allcat" />
                  </li>
                  <li>
                    Sculpture <ChevronRight className="allcat" />
                  </li>
                  <li>
                    Fiber Arts <ChevronRight className="allcat" />
                  </li>
                  <li>
                    Glass Arts <ChevronRight className="allcat" />
                  </li>
                  <li>
                    Wood Arts <ChevronRight className="allcat" />
                  </li>
                </ul>
              </div>
              <div className="list-sort">
                <h4>Price</h4>
                <ul className="pricesort">
                  <li>
                    <input type="radio" />
                    Any Price
                  </li>
                  <li>
                    <input type="radio" />
                    Under $50
                  </li>
                  <li>
                    <input type="radio" />
                    $50 to $100
                  </li>
                  <li>
                    <input type="radio" />
                    $100 to $500
                  </li>
                  <li>
                    <input type="radio" />
                    $500 to $1000
                  </li>
                  <li>
                    <input type="radio" />
                    $1000 to $5000
                  </li>
                  <li>
                    <input type="radio" />
                    above $5000
                  </li>
                </ul>
              </div>
              <div className="list-sort">
                <h4>Location</h4>
                <ul>
                  <li>Anywhere</li>
                  <li>Nepal</li>
                  <li>
                    Custom
                    <input type="text" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={8} className="">
          <div className="search-results-item">
            {posts.length > 0 ? (
              <>
                {posts.map((post, index) => (
                  <PostsTile key={index} post={post} />
                ))}
              </>
            ) : (
              <div className="results-not-found">
                <div className="contatiner">
                  <div className="not-found-text">
                    Results not found for{" "}
                    {`${searchtext}, Try exploring your Arts feed`}
                    <Link to={"/home"} className="btn btn-primary">
                      Home
                    </Link>
                  </div>
                  <div className="not-found-img-wrap">
                    <img src="/images/notfound.png" alt="Results not found" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchResults;
