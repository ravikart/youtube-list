import React from "react";
import Searchbar from "./SearchBar";
import YoutubeVideo from "./apis/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videosList: [], selectedVideo: null };
  processSubmit = async textValue => {
    console.log(textValue);
    const response = await YoutubeVideo.get("/search", {
      params: {
        q: textValue
      }
    });
    this.setState({
      videosList: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.processSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videosList={this.state.videosList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
