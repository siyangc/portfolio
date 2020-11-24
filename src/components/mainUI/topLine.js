import React from 'react'
import './topLine.css'

export default function TopLine(props) {

    return (
        <div id='topLine'>
            <div id='top-left-line'>
                <div 
                id='top-left-l'                 
                className={props.pageIndex===0?'line top-left-l-hidden':'line top-left-l-show'}
                ></div>
                <div 
                id='top-left-r' 
                className={props.pageIndex===0?'line top-left-r-hidden':'line top-left-r-show'}
                ></div>
            </div>
            <div id='top-right-line'>
                <div id='top-right' className={props.pageIndex===0?'line top-right-hidden':'line top-right-show'}></div>
            </div>
        </div>
    )
}
