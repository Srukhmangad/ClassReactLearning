import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contactus from './components/Contactus';
import Footer from './components/Footer';

function App() {
  const contactdetails ={
    name: 'Sumit',
    phone: '9876543210',
    email: 'sumitrukhmangad@outlook.com'
    //States
    //initials
    //hooks: resposible for managing state of our webpage is (UseState)
    //let[statevariable, statefunction]=useState(deafultState/ initialState)
    //statevariable is responsible for storing the state of your component
    //statefunction
  }
    const [name,setName]=useState('HeroVired');
    const [num,setNum]=useState(0);
    

    function HandleClick(){
      if(name=='HeroVired'){setName('Hero')}
      else{setName('HeroVired')}
    }
    
    function RevertName(){
      setName('HeroVired')
    }
    function Increment(){
      setNum(num+1)
    }
    function Decrement(){
      if(num>0)
      setNum(num-1)
    }
  
  let details= '@Copyright 2023'
  let language= 'English, Hindi, Marathi'
  let aboutus='About Us'
  const salutation = ['Namaste','Hello','Hola','Bonjour']
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Header></Header>
      <Contactus name={contactdetails.name} phone={contactdetails.phone} email={contactdetails.email} salutation={salutation[2]}></Contactus>
      <div>Welcome to {name}</div>
      <button onClick={HandleClick}>Click Here</button><br></br><br></br>
      <button onClick={Increment}>Click Here to increment the number</button><br></br>
      <div>Number: {num}</div>
      <button onClick={Decrement}>Click Here to decrement the number</button>
      
      
      
      <Footer details={details} language={language} aboutus={aboutus}/>
    </div>
  );
}

export default App;
