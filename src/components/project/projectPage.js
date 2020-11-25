import React,{useState,useEffect} from 'react'
import './projectPage.css'
export default function ProjectPage(props) {
    const [pageIndex,setPageIndex] = useState(0)
    const [projectPageTopClass,setProjectPageTopClass] = useState('projectPage-top-show')
    useEffect(()=>{
        if(props.pageIndex!==0)
            setProjectPageTopClass('projectPage-top-hidden')
        else if(props.pageIndex===0){
            setPageIndex('')
            setProjectPageTopClass('projectPage-top-show')
        }


    },[props.pageIndex])
    return (
        <div id='projectPage-container'>
            <div id='projectPage-top-wrap'>
                <div 
                id='projectPage-top'
                className={projectPageTopClass}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectPage-top-hidden')
                        setPageIndex(props.pageIndex)
                        setProjectPageTopClass('projectPage-top-show')                        
                }}
                >{pageIndex}</div>
            </div>
            
            <div id='projectPage-line-wrap'>
                <div 
                id='projectPage-line'
                className={props.pageIndex===0?'projectPage-line-hidden':'projectPage-line-show'}
                ></div>
            </div>

            <div id='projectPage-bottom-wrap'>
                <div 
                id='projectPage-bottom'
                className={props.pageIndex===0?'projectPage-bottom-hidden':'projectPage-bottom-show'}
                >4</div>
            </div>
            
        </div>
    )
}
