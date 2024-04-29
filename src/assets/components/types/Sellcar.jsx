import React, { useState } from 'react';
import Video from '../images/video.mp4';
import Form from './Form';

const Sellcar = () => {
  const [change, updateChange] = useState(false);

  const changeState = () => {
    updateChange(true);
  };

  return (
    <>
      <div className="h-80 w-80 relative ">
        {/* Video */}
        <div className="h-full w-full relative">
        
          {change===false && (
            <button onClick={() => changeState("Yes")}
 className="h-full w-full" ><video src= 
{Video}
            autoplay="{false}"  loop muted
            className="h-full  w-full "> 
        </video>
        </button>
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-1">
          {/* Your divs and content here */}
          <div className="h-full w-60 flex">
            <div className="h-full w-50 flex justify-center items-center">
            
            <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellcar;
