import React, { useState } from 'react';


  
const Cursor = ({ image ,cursorimage }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseMove = (event) => {
    const boxRect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - boxRect.left,
      y: event.clientY - boxRect.top,
    });
  };

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <div
      className="box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >

      
      <img src={image} alt="Box content" className="box-image" />
      
      {showCursor && (
        <div
          className={`custom-cursor box-bound ${isActive ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${cursorimage})`,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      )}
    </div>
  );
};
export default Cursor;
