import Arrow from '../components/arrow';
import '../css/services.css'
import ServicesCard from '../components/servicesCard';
import frame1 from '../images/f.png'
import frame2 from '../images/g.png'
import frame3 from '../images/h.png'
import Btn from '../components/btn';
import { TbBackground } from 'react-icons/tb';
import { BiBorderRadius } from 'react-icons/bi';
function Services() {
  return (
   <div className='services'>
<div className='arrwo' style={{paddingLeft:'40px' ,paddingTop:'160px', position:'relative', justifySelf:"center",alignItems:"center" ,top:'40px'}}>
  <Arrow/></div>
<div className='services_title'>
<div  className='services_contents' style={{width:'35%' ,justifySelf:'center' ,alignSelf:'center'}}>
<div style={{fontSize:'14px' , color:'white'}}>
  Speeding up the carrier registration 
    process and minimizing risks is part of the effective process of shipping agencies.
    </div>
    <div style={{color:'white', fontSize:'18px',paddingTop:'10px',fontWeight:"bold"}}>
   <span style={{color:'#F05326'}}>"NQLYAT Solutions"</span>
    <span style={{fontWeight:"600px"}}> 
      offers a comprehensive solution that goes beyond the basic data of tonnage and freight.
      </span>
    </div>
</div>
<div style={{paddingTop:'50px', color:"white",fontSize:'18px', width:'35%',justifySelf:'center' ,alignSelf:'center', fontWeight:"bold"}}>
<span style={{color:'#F05326'}}>Our customers </span>
 <span >get exclusive access to the best carrier monitoring services and smooth registration processes, 
as well as Advanced Cargo Tracking Solutions,
 setting a new standard in freight brokerage</span>

</div>
</div>
<div className='servicesCard'>
     <ServicesCard   src={frame1}  />
    <ServicesCard  src={frame2}/>
    <ServicesCard src={frame3}/>
</div>
<div style={{display:'flex' ,justifyContent:'center',alignItems:'center',position:'relative' ,top:'-50px'}}>  <Btn text={'Read More'} style={{width:'160px' ,fontWeight:'bold'}}/></div>
   
   
   
   
   
   </div>
  );
}

export default Services;