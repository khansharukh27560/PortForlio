import React, { useEffect, useState } from "react";
import TodoList from "./To-Do-List/TodoList";
import ExpencessTracker from "./ExpencesTracker/ExpencessTracker";
import WeatherData from "./weatherData/WeatherData";
import QuestionAndAnswer from "./question&ans/QuestionAndAnswer";
import Counter from "./CountDown/Counter";
import JobApplicationTracker from "./Application Tracker/JobApplicationTracker";
import ScrollToTopButton from "./ScrollToTopButton";


const Home = ()=>{  

  return(
    <>
      
      <ScrollToTopButton/>
      <div>
        <div style={{border:'5px solid black',padding:'25px',margin:'15px',borderRadius:'15px'}}>
        <TodoList/>
        </div>
        <hr />
        <div style={{border:'5px solid black',padding:'25px',margin:'15px',borderRadius:'15px'}}>
        <ExpencessTracker/>
        </div>
        <div style={{border:'5px solid black',padding:'25px',margin:'15px',borderRadius:'15px'}}>
        <WeatherData/>
        </div>
        {/* <div style={{border:'5px solid black',padding:'25px',margin:'15px',borderRadius:'15px'}}>
        <QuestionAndAnswer/>
        </div> */}
        <div style={{border:'5px solid black',padding:'25px',margin:'15px',borderRadius:'15px'}}>
        <Counter/>
        </div>
        <div style={{border:'5px solid black',padding:'25px',margin:'15px',borderRadius:'15px',height:'fit-content'}}>
        <JobApplicationTracker/>
        </div>
        
       
       
        
      </div>
    </>
  )
}
export default Home