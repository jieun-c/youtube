import React, { Component } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

class VideoList extends Component {
    render() {
        return (
            <ul className={styles.videos}>
                {this.props.videos.map((video) => (
                    <VideoItem key = {video.id} video = {video} />
                ))}
            </ul>
        );
    }
}

export default VideoList;