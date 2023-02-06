import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './components/TextForm.css'
import { useState } from 'react';

function App() {
  // const [mode, setMode] = useState('light')
  const [mode, setMode] = useState('dark')

  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode=('dark');
  //   }
  //   else{
  //     setMode=('light');
  //   }
    
  // }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = ' rgb(53, 126, 227)';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'yellow';
      
    }
  }
  return (
    <div className="App">
    

    <Navbar title=""   Home="Home"  mode={mode} toggleMode={toggleMode} />

    <div className="container" >

    <TextForm  heading="Enter Your Text To Analyze" heading1="Please Enter Your Text" />

   

    </div>

    


    
      
    </div>
  );
}

export default App;




