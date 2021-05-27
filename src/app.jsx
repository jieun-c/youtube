import React, { Component } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.props.youtube
      .mostPopular()
      .then(videos => this.setState({videos}));
  }

  search = (query) => {
    this.props.youtube
      .search(query)
      .then(videos => this.setState({videos}));
  }

  selectedVideo = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    const {videos, selectedVideo} = this.state;
    return (
      <div className={styles.app}>
        <SearchHeader onSearch={this.search} />
        <section className={styles.content}>
          <div className={styles.detail}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className={styles.list}>
            <VideoList videos={videos} onVideoClick={this.selectedVideo} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;


