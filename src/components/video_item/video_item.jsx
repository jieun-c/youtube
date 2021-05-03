import React, { Component } from 'react';

class VideoItem extends Component {
    render() {
        return (
            <li>
                <h5>{this.props.video.title}</h5>
            </li>
        );
    }
}

export default VideoItem;