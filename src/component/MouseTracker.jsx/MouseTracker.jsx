import React, { useEffect, useState } from 'react'
import './mousetracker.css'
export default function MouseTracker({ render }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(()=>{
       const handlePosition = (e)=>{
        setMousePosition({x:e.clientX,y:e.clientY})
       }
       window.addEventListener('mousemove',handlePosition)
       return ()=>{
        window.removeEventListener('mousemove',handlePosition)
       }
    })
  return (
    <div className='mouseTracker'>
        
        <p>{render(mousePosition)}</p>

    </div>
  )
}
