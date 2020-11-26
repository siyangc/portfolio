import React from 'react'
import LeftSider from './coverUI/leftSider'
import UpdateTime from './coverUI/updateTime'
import Intro from './coverUI/intro'
import OpenLine from './coverUI/openLine'

import './cover.css'

import {transitionEnd} from '../actions/transitionStatus'
import {useSelector, useDispatch} from 'react-redux';
export default function Blue() {

    const dispatch = useDispatch()  
    const pageIndex = useSelector(state=>state.pageIndex)
    return (
        <div 
            id='cover'
            onTransitionEnd={(e)=>{
                if(e.target.className==='cover-page cover-show')
                    dispatch(transitionEnd())
            }}
            className={pageIndex===0?'cover-page cover-show':'cover-page cover-hidden'}
        >
            <LeftSider />
            <UpdateTime />
            <Intro />
            <OpenLine />
        </div>
    )
}
