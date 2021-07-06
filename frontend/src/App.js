import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <h1>TIKTOK clone</h1>

      <div className="app__videos">
        <Video 
          url="https://v77.tiktokcdn.com/a804b5f9cf53c6ded349597645a63439/60e196b6/video/tos/alisg/tos-alisg-pve-0037c001/f0735403e18049c5aa7240cb3712f28f/?a=1233&br=3092&bt=1546&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107040508170101150450090306D37A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzhmOzU7dTh1NTMzODczM0ApOGlkOjs0OjxkN2k0ZGlnN2dyZGdpLi8yMmVgLS1kMTRzczBgNC5hMmBfNjAzL2NhLmE6Yw%3D%3D&vl=&vr="
          channel="pasannn"
          description="TikTok Cloneeeeee"
          song="Bad Habits"
          likes={123}
          messages={231}
          shares={342}
        />
        <Video 
          url="https://v77.tiktokcdn.com/24bdfaed8c08232e8c137d27ba04ff83/60e1b860/video/tos/alisg/tos-alisg-pve-0037c001/768b462a7fa0428ba086fdceeae1b637/?a=1233&br=2846&bt=1423&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107040731440101150040590D0FB7F5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzNydDN0dWs7NjMzODczNEApNWU3NzRpMzw0N2U7NjZkaGcubl4wc2loZjFgLS1kMS1zc18zLi1jXjZhXi00MS00XzE6Yw%3D%3D&vl=&vr="
          channel="pasannn"
          description="TikTok Cloneeeeee"
          song="Bad Habits"
          likes={459}
          messages={432}
          shares={231}
        />

      </div>
      

      {/* App container */}
        {/* video */}
        {/* video */}
        {/* video */}
        {/* video */}

    </div>
  );
}

export default App;
