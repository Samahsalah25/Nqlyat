import '../css/card.css';
import { GoArrowDownRight } from "react-icons/go";
function Card({text, src, style, className}) {
  return (
    
  

    <div className="card"> 
    <img src={src} ></img>
    <div>{text}</div>
    <div className='icon'>
    <div className="container_content_arrow2" style={{backgroundColor:"rgb(240, 83, 38,0)",fontSize:'16px', opacity: '0.8' ,border:'1px solid white'}}>
         <GoArrowDownRight /></div>
    </div>
    </div>
  
   
  );
}

export default Card;