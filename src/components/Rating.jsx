const Rating = ({ value, setValue, setHovered, hoveredClasses, handleSubmit }) => {
  return (
    <div className='rating-div'>
      <div className='header-div'>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className='text-div'>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support
          request. All feedback is appreciated to help us
          improve our offering!
        </p>
      </div>
      <div className='rating-circles'>
        <span 
          className={hoveredClasses[0]} 
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => value === 1 ? setValue(null) : setValue(1)}  
        >1</span>
        <span 
          className={hoveredClasses[1]} 
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => value === 2 ? setValue(null) : setValue(2)}  
        >2</span>
        <span 
          className={hoveredClasses[2]} 
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => value === 3 ? setValue(null) : setValue(3)}  
        >3</span>
        <span 
          className={hoveredClasses[3]} 
          onMouseEnter={() => setHovered(4)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => value === 4 ? setValue(null) : setValue(4)}  
        >4</span>
        <span 
          className={hoveredClasses[4]} 
          onMouseEnter={() => setHovered(5)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => value === 5 ? setValue(null) : setValue(5)}  
        >5</span>
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Rating;