import React from "react";
import VideoListItem from "./videoListItems";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div className="VideoList">
      <ul> {videoItems} </ul>
    </div>
  );
};

export default VideoList;
