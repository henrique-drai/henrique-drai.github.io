import React from 'react';
import './index.scss';

export default () => {

    return (
        <div className="background-video">
            <video autoPlay loop muted playsInline style={
                {backgroundImage: "url('background-poster.jpg';)"}
                } >
                <source src="background-video.mp4" />
            </video>
        </div>
    );
}