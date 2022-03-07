import React from "react";

const Home = () => {
  var i = 0;
  var images = [];
  var slideTime = 9000; // 9 seconds

  images[0] =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  images[1] =
    "https://cdn.pixabay.com/photo/2018/09/28/19/07/islamic-3710002_960_720.jpg";
  images[2] =
    "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout(changePicture, slideTime);
  }

  window.onload = changePicture;
  var Time = new Date().toLocaleTimeString();
  var CurrentDate = new Date().toLocaleDateString(); // 11/16/2015
  return (
    <div className="test">
      <diV className="centered">
        <h1>Jahidul Islam</h1>
        <h1 style={{ fontSize: "34px" }}> {Time} </h1>
        <h2> {CurrentDate}</h2>
      </diV>
    </div>
  );
};

export default Home;
