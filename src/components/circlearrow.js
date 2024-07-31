import '../css/circlearrwo.css';
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
function Circlearrwo() {
  return (
    
    <div className='container_content__icons_arrow2' style={{color:"white"}} > 
    <div className="container_content_arrow2" style={{backgroundColor:"rgb(240, 83, 38,0)",fontSize:'16px', opacity: '0.8' ,border:'1px solid white'}}> <IoArrowBackSharp /></div>
    <div className="container_content_arrow2" > <IoArrowForwardSharp style={{ opacity: '0.8', fontSize:'16px'}} /></div>
 
  </div>
   
   
   
  );
}

export default Circlearrwo;