import React, { Component } from 'react';
import styles from './video_item.module.css';

class VideoItem extends Component {
    render() {
        const {video, video:{snippet}, onVideoClick} = this.props;
        return (
            <li className={styles.container} onClick={() => onVideoClick(video)}>
                <div className={styles.video}>
                    <img className={styles.thumnails} src={snippet.thumbnails.medium.url} alt={snippet.channelTitle} />
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoItem;