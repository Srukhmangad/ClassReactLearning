import react from 'react'
import './Header.css'
import Title from './subcomponents/Titile'

function Header({name, setName,showTitlePage,setShowTitlePage}){
    
    function HandleClick(){
        if(name=='HeroVired'){
            setName('Hero')
        setShowTitlePage(false)}
        else{setName('HeroVired')}
      }

    return(
        <div>
            <div>Welcome to {name}</div>
            <button onClick={HandleClick}>Click Here</button>
            <div>This is Conditionally rendered Title{showTitlePage? <Title/>:null}</div>
        </div>
    )
}
export default Header