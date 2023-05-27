import React from "react";
import Post from "./post/Post";
import Sugesstion from "./Sugesstion";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline__post">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="timeline_rigth">
        <Sugesstion />
      </div>
    </div>
  );
}

export default Timeline;
