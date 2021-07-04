import { MusicNote } from '@material-ui/icons';
import React from 'react';
import './VideoFooter.css';
import Ticker from 'react-ticker';

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@pasannn</h3>
                <p>This is some description</p>
                <div className="videoFooter__ticker">
                    <MusicNote className="videoFooter__icon" />
                    
                    <Ticker mode="smooth">
                        {({ index }) => {
                            <>
                                <p>I am a song</p>
                            </>
                        }}
                    </Ticker>
                </div>
            </div>   
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />        
        </div>
    )
}

export default VideoFooter
