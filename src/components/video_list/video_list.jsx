import React, { Component } from 'react';
import VideoItem from '../video_item/video_item';

class VideoList extends Component {
    render() {
        return (
            <ul>
                {this.props.videos.map((video) => (
                    <VideoItem key = {video.id} video = {video.snippet} />
                ))}
            </ul>
        );
    }
}

export default VideoList;