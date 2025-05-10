import React, { useState, useEffect } from "react";

function ScrollToTopButton() {


  return (
    <div style={{height:'1000px'}}>
    <div>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <div>
        <button>submit</button>
      </div>
    </div>
    </div>
  );
}

export default ScrollToTopButton;