import React, { Component } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

class App extends Component {
  state = {
    videos: []
  }

  search = (query) => {
    this.props.youtube
      .search(query)
      .then(videos => this.setState({videos}));
  }

  componentDidMount(){
    this.props.youtube
      .mostPopular()
      .then(videos => this.setState({videos}));
  }

  render() {
    return (
      <div className={styles.app}>
        <SearchHeader onSearch={this.search} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;


