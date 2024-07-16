import React from 'react';
import '../assets/styles/Loader.css'; // Assuming you still want to keep the keyframes in a separate CSS file

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="boxes">
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</div>
    
  
  );
};

export default Loader;
