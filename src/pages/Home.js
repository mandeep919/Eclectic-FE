// import { Grid } from "@material-ui/core";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [user] = useState(JSON.parse(localStorage.getItem("user")) || []);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {}, []);

//   return (
//     <div id="home-section" className="">
//       <Grid container>
//         <Grid item xs={10} md={10} className="">
//           <div className="questions-grid">
//             <h3 className="questions-headline">Top Questions</h3>
//             <Link
//               to={user.token ? "/ask-question" : "/login"}
//               className="btn btn-primary"
//             >
//               Ask Question
//             </Link>
//           </div>
//         </Grid>
//         <Grid item xs={1} md={1} className=""></Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Home;
