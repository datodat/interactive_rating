import React, { useState, useEffect } from 'react';
import './App.css';
import { handleHover, handleRate } from './helper';
import Rating from './components/Rating';
import Thanks from './components/Thanks';

function App() {
  const [hoveredClasses, setHoveredClasses] = useState(['', '', '', '', ''])
  const [hovered, setHovered] = useState(null);
  const [value, setValue] = useState(null);

  const [isRated, setIsRated] = useState(false);

  useEffect(() => {
    handleRate(value, setHoveredClasses);
  }, [value]) // eslint-disable-line

  useEffect(() => {
    if(!value){
      handleHover(
        hovered, 
        setHovered, 
        hoveredClasses, 
        setHoveredClasses
      );
    }
  }, [hovered]) // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();

    if(value){
      setIsRated(true);
      setTimeout(() => {
        setIsRated(false);
        setValue(null);
        setHovered(null);
        setHoveredClasses(Array(5).fill(''));
      }, 3000)
    }
  }

  return (
    <div className="container">
      {!isRated ? 
        <Rating 
          value={value} 
          setValue={setValue} 
          setHovered={setHovered} 
          hoveredClasses={hoveredClasses} 
          handleSubmit={handleSubmit}
        />
        : 
        <Thanks value={value} />
      }
    </div>
  );
}

export default App;