import AboutCard from '../components/aboutCard';
import Circlearrwo from '../components/circlearrow';
import '../css/aboutus.css'
import owner1 from "../images/owner1.png";
import owner2 from "../images/owner2.png";
import owner3 from "../images/owner3.png"
function AboutUs() {
  return (
    
  

    <div className="aboutus"> 
    
<div className='circle_leftt'>
</div>
<div className='circle_rightt'>

</div>
    <div className='aboutus_details' style={{position:'relative',top:"340px"}}>
    <div style={{color:"white" ,fontSize:'30px' ,fontWeight:'bold'}}>what <span style={{color:"#F05326"}}> our client </span>says</div>
<div className='aboutus_container' >
  <AboutCard src ={owner1} name={"Ahmed"}/>
  <AboutCard src ={owner2} name={'Bakr'}/>
  <AboutCard src ={owner3} name={'Mohamed'}/>
</div>
<div className='about_icons'>
  <Circlearrwo/>
</div>
    </div>

    </div>
  
   
  );
}

export default AboutUs;