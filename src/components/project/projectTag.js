import React,{useState,useEffect} from 'react'
import './projectTag.css'
export default function ProjectTag(props) {
    const [tagIndex,setTagIndex] = useState(0)
    const [projectTagClass,setProjectTagClass] = useState('projectTag-show projectTag')
    const tag = ['','EMRC VIC','FERNY CREEK','ZEN ELEMENT','DOODLE-JUMP','']
    useEffect(()=>{
        if(props.pageIndex!==0)
            setProjectTagClass('projectTag-hidden projectTag')
        else if(props.pageIndex===0)
            setProjectTagClass('')
    },[props.pageIndex])
    return (
        <div id='projectTag'>
            <div 
                id='project-tag' 
                className={projectTagClass}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectTag-hidden projectTag')
                        setTagIndex(props.pageIndex)
                        setProjectTagClass('projectTag-show projectTag')                        
                }}
            >
                {tag[tagIndex]}
            </div>
            &nbsp;
        </div>
    )
}
