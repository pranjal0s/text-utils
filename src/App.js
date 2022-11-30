import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const[mode, setMode] = useState('dark');
  const toogleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About us" mode= {mode} toogleMode={toogleMode} />
      <div className='container my-3'>
        <TextForm  heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
