import React, { useEffect, useState } from "react";
import TodoList from "./To-Do-List/TodoList";
import ExpencessTracker from "./ExpencesTracker/ExpencessTracker";
import WeatherData from "./weatherData/WeatherData";
import QuestionAndAnswer from "./question&ans/QuestionAndAnswer";
import Counter from "./CountDown/Counter";
import JobApplicationTracker from "./Application Tracker/JobApplicationTracker";
import ScrollToTopButton from "./ScrollToTopButton";
import MouseTracker from "./MouseTracker.jsx/MouseTracker";
import PortFolioDetail from "./PortFolioDetailWithUrl/PortFolioDetail";



const Home = () => {

  return (
    <>
      <MouseTracker render={(mousePosition) => (
        <div>
          <p style={{color:'white'}}>X: {mousePosition.x}</p>
          <p style={{color:'white'}}>Y: {mousePosition.y}</p>
        </div>
      )}/>
      <ScrollToTopButton />
      <div style={{ border: '5px solid black', padding: '25px', margin: '15px', borderRadius: '15px', height: 'fit-content' }}>
        <PortFolioDetail />
      </div>
    </>
  )
}
export default Home