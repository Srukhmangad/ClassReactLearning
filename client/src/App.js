import logo from './logo.svg';
import './App.css';
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

      <Footer details={details} language={language} aboutus={aboutus}/>
    </div>
  );
}

export default App;
