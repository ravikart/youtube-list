import React from "react";
import "./videoitem.css";
class VideoItem extends React.Component {
  onClickVideo = event => {
    this.props.onVideoSelect(this.props.videoDetails);
  };
  render = props => {
    return (
      <div className="item video-item" onClick={this.onClickVideo}>
        <img
          className="ui image"
          alt={this.props.videoDetails.snippet.title}
          src={this.props.videoDetails.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{this.props.videoDetails.snippet.title}</div>
        </div>
      </div>
    );
  };
}

export default VideoItem;
