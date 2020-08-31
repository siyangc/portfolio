import React, { Component } from 'react';
//import githubIcon from '../../public/icons/GitHub-Mark-32px.png'
//import {Mobile, Default} from '../../configs/mediaQueryBreakPoint'
import './topNavBarRight.css';

export default class topNavBarRight extends Component {
    
    render() {        
        return (
            <div className="topNavBarRight">                
                <ul>
                    <li>
                        <img    src="/icons/gitHub.png" 
                                alt="github"
                                onClick = {e => window.open("https://github.com/siyangc",'_blank')}                                  
                        />
                    </li>
                    <li>
                        <img    src="/icons/facebook.png" 
                                alt="facebook"
                                onClick = {e => window.open("https://www.facebook.com/smrcsy",'_blank')}                                    
                                
                        />
                    </li>
                    <li>
                        <img    src="/icons/linkedin.png" 
                                alt="linkedin"
                                onClick = {e => window.open("https://www.linkedin.com/in/siyangc",'_blank')}                                        
                        />
                    </li>
                </ul>                   
            </div>            
        )
    }
}

