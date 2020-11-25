import React,{useState,useEffect} from 'react'
import './projectBtn.css'
export default function ProjectBtn(props) {
    const [btnIndex,setBtnIndex] = useState(0)
    const [projectBtnClass,setProjectBtnClass] = useState('projectBtn')
    const btn = ['','VIEW EMRC VIC','VIEW FERNY CREEK','VIEW ZEN ELEMENT','VIEW DOODLE-JUMP','']
    const address = [
        '',
        'https://www.emrcvic.com',
        'http://upthehill.com.au.s3-website-ap-southeast-2.amazonaws.com',
        'http://zenelementgroup.com.au.s3-website-ap-southeast-2.amazonaws.com',
        'http://doodle-jump.smrcsy.com',
        ''
    ]
    useEffect(()=>{
        if(props.pageIndex!==0)
            setProjectBtnClass('projectBtn-hidden projectBtn')
        else if(props.pageIndex===0){
            setBtnIndex(0)
            setProjectBtnClass('projectBtn-show projectBtn')
        }
            
    },[props.pageIndex])
    return (
        <div id='projectBtn'>
            <div id='projectBtn-wrap'>
                <a 
                target="_blank"
                onClick={()=>window.open(address[btnIndex])}
                className={projectBtnClass}
                onTransitionEnd={(e)=>{                   
                    if(e.target.className==='projectBtn-hidden projectBtn')
                        setBtnIndex(props.pageIndex)
                        setProjectBtnClass('projectBtn-show projectBtn')                        
                }}
                >{btn[btnIndex]}</a>
            </div>
        </div>
    )
}
