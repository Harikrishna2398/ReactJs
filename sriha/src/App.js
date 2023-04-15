import './App.css';
import HarryCreations  from './fun';
import React,{ useState } from 'react';


function App() {
  const[text,reflectText]=useState('');
  const theChangingText=(text) =>{
    reflectText(text);
  }
  return (
    <div className='container'>
      <div className='The-text'>
     Enter Text:<input type={'text'} placeholder={'Type here'} onChange={(e)=>theChangingText(e.currentTarget.value)}/>
    </div>
    <div>
      <fieldset className='reflect'>
        <legend className='header'>The reflected Text here...</legend>
      {text}
      </fieldset>
    </div>
      <div>
      <fieldset className='Quote'>
        <legend>The Quote</legend>
      <HarryCreations/>
      </fieldset>
      </div>
    </div>
  );
}

export default App;
