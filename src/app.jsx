import React, { Component } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

class App extends Component {
  state = {
    videos: []
  }

  componentDidMount(){
      const requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAQWyPMFLIW1-BEVXdaqSYPhsVsuKcbrYE", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({videos : result.items}))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <VideoList videos={this.state.videos}/>
    );
  }
}

export default App;


