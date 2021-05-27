import React, { Component } from 'react';
import styles from './video_detail.module.css';

class VideoDetail extends Component {


    render() {
        const {video} = this.props;
        return (
            <div>
                <h1>{video.snippet.title}</h1>
            </div>
        );
    }
}

export default VideoDetail;