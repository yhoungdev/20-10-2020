import React,{useState, useEffecrt} from 'react';
import Homepage from './screen';

import './App.css';
import Loader from './load/loader';


function App() {
  const [hide,setHide]=useState('none')
  const [show,setShow]=useState('block')
  setTimeout(()=> {
      setShow('none')
      setHide('block')
      
  },3000)
  
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
