import React from 'react'
import TopLine from './topLine'
import BottomLine from './bottomLine'
import LeftLine from './leftLine'
import RightLine from './rightLine'
import {useSelector} from 'react-redux';
import './Lines.css'

export default function Lines() {
    const pageIndex = useSelector(state=>state.pageIndex)
    return (
        <div>
            <TopLine pageIndex={pageIndex}/>
            <BottomLine pageIndex={pageIndex}/>
            <LeftLine pageIndex={pageIndex}/>
            <RightLine pageIndex={pageIndex}/>
        </div>
    )
}
