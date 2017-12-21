import React from "react";
import "./css/searchYt.css";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div> Loading.... </div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="videoContent">
      <iframe className="videoContent" src={url}>
        {" "}
      </iframe>
      <div className="details">
        <div> {video.snippet.title} </div>
        <div> {video.snippet.description} </div>
      </div>
    </div>
  );
};

export default VideoDetails;
