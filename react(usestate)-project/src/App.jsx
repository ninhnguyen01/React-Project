import React, { useState } from 'react';
import './App.css'

export default function ColorPicker() {
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState();
  const [phone, setPhone] = useState('');
  
  const divStyle = {backgroundColor: color};
  const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];
    {colorNames.map((colorName)=>(
    <button onClick={() => setColor(colorName)} key={colorName}>{colorName}</button>   
  ))}
  
  const validPhoneNumber = /^\d{0,10}$/;
  const handleChange = ({ target })=> {
     const newPhone = target.value;
     const isValid = validPhoneNumber.test(newPhone);
     if (isValid) {
       setPhone(newPhone);
     }
     // just ignore the event, when new value is invalid
    };
  

  return (
    <>
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
      <br /><br />
      <button onClick={() => setColor('White')}>
        Reset
      </button>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>

    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div>

    </>
  );
}
