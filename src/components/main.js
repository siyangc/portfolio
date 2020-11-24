import React from 'react';
import Redc from './redc';
import Lines from './mainUI/Lines';
import ProjectTag from './project/projectTag';
import ProjectPage from './project/projectPage';

import './main.css'
export default function Main(props) {
 
    return (
        <div
         id='main'         
        >
            <Redc pageIndex={props.pageIndex}/>
            <Lines />
            <ProjectPage pageIndex={props.pageIndex}/>
            <ProjectTag pageIndex={props.pageIndex}/>

        </div>
    )
}
