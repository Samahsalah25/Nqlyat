import '../css/aboutCard.css';
import { RiStarSFill } from "react-icons/ri";
function AboutCard({ src, name}) {
  return (
    
  

    <div className='aboutCard' > 
    <div className='aboutCard_info'>
        <div ><img style={{width:'50px' ,height:'50px'}} src ={src}/></div>
        <div >
            <div style={{fontSize:'18px' ,fontWeight:'bold'}}>{name}</div>
            <div style={{color:'rgba(0, 0, 0, 1)'}}>owner</div>
            <div className='star'>
            <RiStarSFill className='stars_icon' />
            <RiStarSFill className='stars_icon' />
            <RiStarSFill className='stars_icon' />
            <RiStarSFill className='stars_icon' />

            </div>

        </div>

    </div>
    <div style={{color:'rgba(0, 0, 0, 1)', fontSize:'14px' }}>
    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis enim donec etiam tellus.
     Ac malesuada bibendum faucibus sollicitudin in amet at. Mauris donec pellentesque
     sit velit massa sem eget ligula. Morbi elit quis placerat pharetra In
    </div>
    </div>
  
   
  );
}

export default AboutCard;