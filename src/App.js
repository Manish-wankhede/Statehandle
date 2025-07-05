import { useState } from 'react';
import './App.css';
import btnModule from "./Button.module.css"

function App() {

  let [status, setStatus] = useState(false);

  let [pStatus, setPstatus] = useState(false);

  let [menuStatus, setMenuStatus] = useState(false);

  let [modelState, setModelState] = useState(false);

  return (
    <div className="App">
      <button className='en' onClick={() => setModelState(true)}>Enquiry Now</button>
      <div onClick={() => setModelState(false)} className={`ModelOverlay ${modelState ? 'modelShow' : ''}`}></div>

      <div className={`ModelDiv ${modelState ? 'showModelDiv' : ''}`}>
        <h3>Enquiry Now <span onClick={() => setModelState(false)}>&times;</span></h3>
      </div>

      <h1>Module style in css</h1>

      {/* <button className='micon' onClick={() => setMenuStatus(!menuStatus)} >
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button> */}

      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
        
      <input type={pStatus ? 'text' : 'password'} /> <button onClick={() => setPstatus(!pStatus)}>
        {pStatus ? 'Hide' : 'Show'}
      </button> <br />


      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
      <h1>Use of Ternary Operators</h1>
      <button onClick={() => setStatus(!status)}>
        {(status) ? 'Hide' : 'Show'}
      </button>
      {(status) ? <h1 className='para'>Welcome to SW</h1> : ''}
    </div>
  );
}

export default App;
