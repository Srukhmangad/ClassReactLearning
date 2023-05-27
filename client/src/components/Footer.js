import './Footer.css'

export default function Footer({details,language,aboutus}){
    console.log(aboutus)
    return(
        <div className="footer">
            <span>{details} and this website can be viewed in {language}</span>
            <span><a href="#">{aboutus}</a></span>
            
        </div>
        
    )
}