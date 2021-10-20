import React,{useState, useEffect} from 'react';
import Homepage from './screen';

import './App.css';
import Loader from './load/loader';


function App() {
  const [hide,setHide]=useState('none')
  const [show,setShow]=useState('block')
  useEffect(() => {
    setShow('none')
    setHide('block')
  }, [])

  
  return (
    <div className="App">
    <div style={{display:show}} className='hide'>
      <Loader/>
    </div>
     
     <div className='show' style={{display:hide}} >
      <Homepage/>
     </div>
    </div>
  );
}

export default App;
