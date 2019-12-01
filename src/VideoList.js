import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const value = this.props.videosList.map(video => {
      console.log(video.id.videoId);
      return (
        <VideoItem
          key={video.id.videoId}
          videoDetails={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <div className="ui relaxed divided list">{value}</div>;
  }
}

export default VideoList;
