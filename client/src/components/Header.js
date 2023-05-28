import react from 'react'
import './Header.css'
import Title from './subcomponents/Titile'

function Header({name, setName,showTitlePage,setShowTitlePage}){
    
    function HandleClick(){
        if(name=='HeroVired'){
            setName('Hero')
        setShowTitlePage(false)}
        else{setName('HeroVired') 
        setShowTitlePage(true)}
      }

    return(
        <div>
            <div>Welcome to {name}</div>
            <div style={{color:'brown'}}>This is Conditionally rendered Title{showTitlePage? <Title/>:null}</div>
            <button onClick={HandleClick}>Click Here</button>
        </div>
    )
}
export default Header