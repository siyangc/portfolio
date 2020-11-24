import React,{useState,useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux';
import {transitionEnd} from '../actions/transitionStatus'
import './redc.css'
export default function Redc(props) {
    const dispatch = useDispatch();
    const a = ['aaaaaaaa','bbbbbbbbbbb','dddddd','dddddeee','gggggg','ddddddddddd','last']
    const pageIndex = useSelector(state=>state.pageIndex)
    const [b,setB] = useState('0')
    const [moveClass,setMoveClass] = useState('aaa bbb')
    useEffect(()=>{
        if(pageIndex!==0)
            setMoveClass('bbb ccc')
    },[pageIndex])
    return (
        <div>
            <div 
                className={moveClass}
                onTransitionEnd={(e)=>{
                    if(e.target.className==='aaa bbb')
                        dispatch(transitionEnd())
                    else if(e.target.className==='bbb ccc')
                        setB(pageIndex)
                        setMoveClass('aaa bbb')
                }}
            >
                {a[b]}
                {b}
            </div>

        </div>
    )
}
