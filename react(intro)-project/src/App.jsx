import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Profile from './Octopus';
import ProfilePage from './Monkey';
import Greeting from './Greeting';

function App() {
  const people = ['Rowe ', 'Prevost ', 'Gare '];

  function handleHover() {
    alert('Stop it. Stop clicking.');
  }

  function handleClick() {
    alert('Submission Successful.');
  }

  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  
  return (
    <>
      <h1>Vite + React</h1>
      <h1>Hello world</h1>
      <p>Hello World</p>
      <nav>I am a nav bar</nav>
      
      <div>
        <h2>My Team</h2>
          <ul>
            <li>Benzo Walli</li>
            <li>Rasha Loa</li>
            <li>Tayshaun Dasmoto</li>
            <li>Colmar Cumberbatch</li>
            <li>Femi Billon</li>
          </ul>
      </div>
      
      <button onClick={handleHover}>Alert</button>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Submit</button>
      
      <a href="https://react.dev/" target='_blank'>
        <h1>
          Click me!
        </h1>
      </a>
    
     <p>{people}</p>

    <h1>Hello again, World!</h1>
    <h1>Hello, I'm a functional React Component!</h1>

   	<blockquote>
  			<p>
    			What is important now is to recover our senses.
  			</p>
  			<cite>
    		  <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
      	    Susan Sontag
    		  </a>
  			</cite>
			</blockquote>

    <>  
      <Profile/>
      <ProfilePage/>
    </>

    <div>
      <h1>
        MovieFlix
      </h1>
      <Greeting name="Alison" />
    </div>
    <br></br>
    <button onClick={handleEvent}>
        Hello world
    </button>

    </>
  )
  
}




export default App
