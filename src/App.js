import { useState } from 'react';
import './App.css';
import btnModule from "./Button.module.css"

function App() {

  let [status, setStatus] = useState(false);

  return (
    <div className="App">
      <h1>Module style in css</h1>
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
