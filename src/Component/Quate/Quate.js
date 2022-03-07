import React, { useEffect, useState } from "react";

const Quate = () => {
    
  const images = [
    "ভবিষ্যতে সবকিছু অনিশ্চিত হলেও,নিজের মৃত্যু নিশ্চিত..!!",
    "যে আল্লাহর উদ্দেশ্যে বিনয়ী হয় , আল্লাহ তার মর্যাদা বাড়িয়ে দেন।",
    "সর্বোত্তম জীবন পদ্ধতি হচ্ছে মুহাম্মদ সাঃ প্রদর্শিত পদ্ধতি",
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  

 

  return (
    <div>
      <h2>{images[currentIndex]}</h2>

    <script async="true" src="https://cse.google.com/cse.js?cx=008391824253360889328:j5posmpyok0" type="text/javascript"></script>

    </div>
  );
};

export default Quate;
