import React, { useEffect, useState } from 'react'
// import { use } from 'react'

export default function Counter() {
    const [eventTime, seteventTime] = useState(()=>{
        return localStorage.getItem('eventTime') || ''
    })
    const [leftTime,setLeftTime]= useState({})
    const [intervalId,setIntervalId] = useState(null)
    const setCountDown = ()=>{
        if(!eventTime)return;
        localStorage.setItem('eventTime',eventTime)
        if(intervalId){
            clearInterval(intervalId)
        }
        const interval = setInterval(()=>{
            const now = new Date().getTime()
            const event = new Date(eventTime).getTime()
            const diff = event-now
            if(diff<=0){
                clearInterval(interval)
                setLeftTime({
                    days:0,
                    hours:0,
                    minutes:0,
                    seconds:0,
                    expire:true
                })
            }else{
                setLeftTime({
                    days:Math.floor(diff /(1000*60*60*24)),
                    hours:Math.floor((diff %(1000*60*60*24))/(1000*60*60)),
                    minutes:Math.floor((diff %(1000*60*60))/(1000*60)),
                    seconds:Math.floor((diff %(1000*60))/(1000)),
                    expire:false
                })
            }
    
        },1000)
        setIntervalId(interval);
    }
    useEffect(()=>{
        if(eventTime){
            setCountDown()
        }
        return () => clearInterval(intervalId);
    },[])
  return (
    <div>
        <div className='applicationTracker'>
            <h1 className="trackerTitle">Counter App</h1>
            <div>
                <input type="datetime-local" value={eventTime} onChange={(e)=>seteventTime(e.target.value)} />
                <button onClick={setCountDown}>Enter Your Date</button>
            </div>
            <div>
            { leftTime.expire ? (
          <span>Time expired!</span>
        ) : (
          <span>
            {leftTime.days}d {leftTime.hours}h {leftTime.minutes}m {leftTime.seconds}s
          </span>
        )}
            </div>
        </div>
    </div>
  )
}
