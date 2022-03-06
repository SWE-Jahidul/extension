import React from "react";

const Home = () => {
  var Time = new Date().toLocaleTimeString();
  var CurrentDate = new Date().toLocaleDateString(); // 11/16/2015
  return (
    <div>
      i am home
      <h1> {Time} </h1>
      <h2> {CurrentDate}</h2>
    </div>
  );
};

export default Home;
