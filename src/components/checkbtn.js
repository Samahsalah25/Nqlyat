import '../css/checkbtn.css';
import { HiCheck } from "react-icons/hi";
import Check from '../images/check-mark.png'
function CheckBtn({text}) {
  return (
    
  

  <button className='btn5'>
    <div className='check'><HiCheck className='icons' style={{color:'#F05326' }}/>
    
    </div>
 
    <div>{text}</div>
  </button>
   
   
   
  );
}

export default CheckBtn;