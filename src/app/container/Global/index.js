// Global component
import React, { useState } from 'react';
import Box from '../../components/Box/index';
import Button from '../../components/Button/index';
import './index.css'

const Global = (props) => {
  const { data } = props;
  const [mainData, setMainData] = useState(data.pets);

  const handleClick = (id) => {
    const newData = data.pets.filter(pet => pet.petType === id);
    setMainData(newData);
  }

  const removeBox = (ind) => {
    const removedData = mainData.filter((box, index) => index >= ind); 
    setMainData(removedData);
  }

  mainData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className='global-wrapper'>
      <div className='global-section'>
        <Button 
          data={mainData}
          onClick={(id) => handleClick(id)}
        />
        <Box
          data={mainData}
          onClick={(ind) => removeBox(ind)}
        />
      </div>
    </section>
  );
}

export default Global;