import React,{} from 'react';
import Navbar from './components/Navbar';
import User from './components/User';


import './App.css';


function App() {
  
  return (
    <div className="container">
   <Navbar title = "User App "/>
   <hr />
   <User
    name= "Açelya Korkmaz"
    sallary="25000"
    department= "Tecnology"
    />
      <User
   
   name= "Ahmet Erdal "
   sallary="50000"
   department= "Tecnology"
    />
   </div>
    
    
  );
}

export default App;
