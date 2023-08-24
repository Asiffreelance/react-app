

import './App.css';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
import Header from './components/Header';
import Alert from './components/Alert';
import About from './components/About';
import {
   BrowserRouter as Router, Routes, Route
  } from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  
  const showAlert =(message, type)=>{
    setAlert({
          msg : message, 
          type: type
            })
setTimeout(() => {
  setAlert(null);
}, 1000);
  }


  const toggleMode=()=>{

    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"

      showAlert("Light mode disablecd ", "success")
      
    }
    
    else{
       setMode("dark")

       document.body.style.backgroundColor="grey"    
       showAlert("Dark mode has been Enabled", "success")
       
    }
    
  }
  const changeGreen= ()=>{
    console.log("vvdhssmnv")
    document.body.style.backgroundColor="green"
    showAlert("Green color successfully changed", "success")
  }
  const changeYellow =()=>{
    console.log("okay")
    document.body.style.backgroundColor="#FCD12A";
    showAlert("Yellow color successfully changed", "success")

  }
  const changeDanger = ()=>{
    console.log("okay")
    document.body.style.backgroundColor="red";
    showAlert("Red color successfully changed", "success")
}

  
  return (
    <>

    <Router>

<Header  mode={mode}  toggleMode={toggleMode}  changeGreen={changeGreen}  changeYellow={changeYellow} changeDanger={changeDanger} />
<Alert alert = {alert}/>
<TextForm  showAlert={showAlert} heading =" Enter the text to analyze"/>

   
  
    <Routes>
    <Route path="/" element={<About />} />
   
          </Routes>
       
         
          </Router>
          
    </>
    
  );
}

export default App;
