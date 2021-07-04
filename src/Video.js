import React, { useRef, useState } from 'react';
import './Video.css'

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // If video is playing stop it otherwise play it
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video onclick={handleVideoPress} className="video__player" loop ref={videoRef} src="https://v77.tiktokcdn.com/a804b5f9cf53c6ded349597645a63439/60e196b6/video/tos/alisg/tos-alisg-pve-0037c001/f0735403e18049c5aa7240cb3712f28f/?a=1233&br=3092&bt=1546&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107040508170101150450090306D37A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzhmOzU7dTh1NTMzODczM0ApOGlkOjs0OjxkN2k0ZGlnN2dyZGdpLi8yMmVgLS1kMTRzczBgNC5hMmBfNjAzL2NhLmE6Yw%3D%3D&vl=&vr="></video>

            {/* Video footer */}

            {/* Video side bar */}
        </div>
    )
}

export default Video
