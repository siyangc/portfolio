import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {pageDown} from '../../actions/flipPage'
import {transitionRun} from '../../actions/transitionStatus'
import './openLine.css'
export default function OpenLine() {
    const dispatch = useDispatch()
    const loadStatus = useSelector(state=>state.loadStatus)
    const openWeb = () => {
        if(loadStatus){
            dispatch(pageDown())
            dispatch(transitionRun())
        }
        
    }
    return (
        <div 
            id='openLine' 
            onClick={openWeb}
        >
            <span id="open-line-wrap">
                <span id="open-line"></span>
            </span>
        </div>
    )
}
