import React from 'react';
import Lines from './mainUI/Lines';
import ProjectTag from './project/projectTag';
import ProjectPage from './project/projectPage';
import ProjectBtn from './project/projectBtn'
import ProjectText from './project/projectText';
import ProjectPic from './project/projectPic'
import './main.css'
export default function Main(props) {
 
    return (
        <div
         id='main'         
        >
            <Lines />
            <ProjectPage pageIndex={props.pageIndex}/>
            <ProjectTag pageIndex={props.pageIndex}/>
            <ProjectBtn pageIndex={props.pageIndex}/>
            <ProjectText pageIndex={props.pageIndex}/>
            <ProjectPic pageIndex={props.pageIndex}/>
        </div>
    )
}
