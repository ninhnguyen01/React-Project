import { useState } from 'react'
import './App.css'

function App() {
  
    // Declare a variable:
    const name = 'Gerdo';
    const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
    const kitty = "https://content.codecademy.com/courses/React/react_photo-kitty.jpg";
    
    const strings = ['Home', 'Shop', 'About Me'];
    const listItems = strings.map(string => <li>{string}</li>);

    const redPanda = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
      alt: 'Red Panda',
      width:  '200px'
    };


    function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }

  return (
    <>
    <h1>John Kim</h1>
    <p>My name is John Kim. I am a software developer. I specialize in creating React applications.</p>
    <p>Hello, {name}!</p>
    <h2>Animal</h2>
    <img src={goose} alt="Goose" onClick={makeDoggy}/>
    <br />
    <br />
    <img src={kitty} alt="Kitty"/>
    <br />
    <br />
    <div>
      <h1>My Favorite Foods</h1>
      <ul>
        <li>Sushi Burrito</li>
        <li>Rhubarb Pie</li>
        <li>Nacho Cheez Straight Out The Jar</li>
        <li>Broiled Grapefruit</li>
      </ul>
      <ul>{listItems}</ul>
    </div>

    <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    </>
  )
}

export default App
