import react from 'react'
import './Header.css'

function Header({name, setName}){
    
    function HandleClick(){
        if(name=='HeroVired'){setName('Hero')}
        else{setName('HeroVired')}
      }

    return(
        <div>
            <div>Welcome to {name}</div>
            <button onClick={HandleClick}>Click Here</button>
        </div>
    )
}
export default Header