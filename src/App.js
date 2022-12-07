// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
        }, 2000);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-primary')
  // }

                      //clss
    const toggleMode= ()=>{
      // removeBodyClasses();
      // console.log(cls);
      // document.body.classList.add('bg-'+ cls) 
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#160040';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'White';
        showAlert("Light mode has been enabled", "success");
      } 
    }
  
  return ( 
  <>

<Navbar title="MyApp" aboutText="About" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
    <div className="container my-3">

{/* users-->- Componet 1 
--.users/home--> componet 2
*/}
      {/* <BrowserRouter>
        <Routes> */}
               {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/' element={ */}
          <Textform showAlert={showAlert} heading="Enter the text for UPPER CASE" mode={mode}/>
          {/* }/> */}
     
          

        
        {/* </Routes>

      </BrowserRouter> */}
       
      

    </div>
  </>

    );
  }

export default App;
