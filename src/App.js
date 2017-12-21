import _ from "lodash";
import React from "react";
// import ReactDom from "react-dom";

import YTSearch from "youtube-api-search";
import SearchBar from "./view/searchBar.js";
import VideoList from "./view/videoList";
import VideoDetails from "./view/videoDetails";

const API_KEY = "AIzaSyBzdXJLA2lrV1BR79TJTApy1BkQIgFsvEE";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch(" ");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="VideoPlayer">
          <div className="VideoPlay">
            <VideoDetails video={this.state.selectedVideo} />{" "}
          </div>
          <div className="VideoPlayList">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
