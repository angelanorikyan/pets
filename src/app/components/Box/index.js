import React from 'react';
import uuidv4 from 'uuid/v4';
import './index.css'

const Box = (props) => {
  const {data, onClick } = props;

  const removeBox = (ind) => {
    onClick(ind);
  }

  return (
    <section className='box-wrapper'>
      {
        data.map((box,index) => {
          return <div
            className='box'
            key={uuidv4()}
            onClick={() => removeBox(index)}
            >
            <div className='image-frame'>
              <div className='image-wrapper'>
                <img src={box.imageSrc} alt={box.name} className='img-box'/>
              </div>
            </div>
            <div className='info-frame'>
              <h1> {box.name} </h1>
              <p className='global-italic-font'> {box.petType} </p>
            </div>
          </div>
        })
      }

    </section>
  );
}

export default Box;