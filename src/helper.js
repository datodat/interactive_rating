export const handleHover = (hovered, setHovered, hoveredClasses, setHoveredClasses) => {
  if(hovered){
    if(hovered === 1){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(hovered === 2){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(hovered === 3){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered';
      newArray[2] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(hovered === 4){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered';
      newArray[2] = 'hovered';
      newArray[3] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(hovered === 5){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered';
      newArray[2] = 'hovered';
      newArray[3] = 'hovered';
      newArray[4] = 'hovered-current';
      setHoveredClasses(newArray);
    }
  }else{
    const emptyArray = Array(5).fill('');
    setHoveredClasses(emptyArray);
  }
}

export const handleRate = (value, setHoveredClasses) => {
  if(value){
    if(value === 1){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(value === 2){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(value === 3){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered';
      newArray[2] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(value === 4){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered';
      newArray[2] = 'hovered';
      newArray[3] = 'hovered-current';
      setHoveredClasses(newArray);
    }else if(value === 5){
      const newArray = Array(5).fill('');
      newArray[0] = 'hovered';
      newArray[1] = 'hovered';
      newArray[2] = 'hovered';
      newArray[3] = 'hovered';
      newArray[4] = 'hovered-current';
      setHoveredClasses(newArray);
    }
  }else{
    return;
  }
}