import React, {Component} from 'react';
import Iframe from 'react-iframe';
    
    
export default class LifeCycleCodepen extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Life Cycle Codepen</h1>
                    <Iframe url="https://codepen.io/ccharris/full/wxdKYa/"
                        position="auto"
                        width="1400px"
                        height="940px"
                    />
                </div>
            </div>
        )
    };
};

