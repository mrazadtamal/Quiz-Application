import React from "react";
import classes from "../styles/Video.module.css";

const Video = () => {
  return (
    <>
      <a href="quiz.html">
        <div className={classes.video}>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1633323815/python_yzfeyo.svg"
            }
            alt="Video Title"
          />
          <p>python</p>
          <div className={classes.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
