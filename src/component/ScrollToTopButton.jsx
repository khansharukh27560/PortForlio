import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

 useEffect(()=>{
    const handleScroll=()=>{
        if(window.scrollY>300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    window.addEventListener("scroll",handleScroll)
    return()=>{
        window.removeEventListener("scroll",handleScroll)
    }

 },[])

 const scrollToTop=()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
 }  
  

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 999
        }}
      >
        ↑ Top
      </button>
    )
  )
}

export default ScrollToTopButton;
