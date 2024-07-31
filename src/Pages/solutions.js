

import Btn from '../components/btn';
import '../css/solutions.css';
import Image_car from '../images/Rectangle 2.png';
import Image_car2 from '../images/Rectangle 3.png';
import Image_car3 from '../images/Rectangle 4.png';
import Track from '../images/track.png';
import Number from '../images/numbers.png';
import Ok from '../images/ok.png'
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import Card from '../components/card';
import Arrow from '../components/arrow';
import car1 from '../images/1.png';
import car2 from '../images/2.png';
import car3 from '../images/3.png';
import car4 from '../images/4.png';
import CheckBtn from '../components/checkbtn';
function Solutions() {
  return (
    
  
    <div className='solutions_section'>
 <div className='solutions' >

<div className='circle_left'>
</div>
<div className='circle_right'>

</div>

<div className="container">
  {/* here content of solutions */}
  <div className='container_content'>
<div className='container_content_icons'>
  <div className="container_content_arrow1"> 
  <MdOutlineArrowOutward  className='arrow'/>
  <MdOutlineArrowOutward  className='arrow2'/>
  </div>

  <div className='container_content__icons_arrow2' > 
    <div className="container_content_arrow2" style={{backgroundColor:"rgb(240, 83, 38,0)",fontSize:'16px', opacity: '0.8' ,border:'1px solid white'}}> <IoArrowBackSharp /></div>
    <div className="container_content_arrow2" > <IoArrowForwardSharp style={{ opacity: '0.8', fontSize:'16px'}} /></div>
 
  </div>

</div>
<div className='container_comtents_title'>
Take advantage of the superior load-loading platforms of "NQLYATsolutions",
 which serve intermediaries of all sizes. 
Whether you are an emerging broker or a country-wide operation, the pallets for loading cargo for brokers from "transport solutions" 
guarantee prompt delivery of your shipments

</div>
<div className='container_comtents_details'>Cargo loading platforms from "NQLYAT solutions" are designed to simplify your operations and keep your cargo in constant motion. We rely on actual transactions to deliver accurate market prices across various routes, while peer reviews direct you to the perfect carrier every time. With "transportation solutions", you can publish and search for trucks without limits,
   and stay informed thanks to instant alerts even when you are offline.</div>
{/* btn here */}
   <div className="container_contents_btns">
    <Btn text="Get A Quote" ></Btn>
    <Btn text="Learn More"     className="btn_learn"></Btn>
  </div>
  </div>
 {/* here the images of solutions */}

</div>
<div className='container_images'>

<img  className="image1" style={{ overFlow: 'hidden'
}} src={Image_car}></img>
<img  className="image2" tyle={{ overFlow: 'hidden'
}} src={Image_car2}></img>
<img  className="image3" tyle={{ overFlow: 'hidden'
}} src={Image_car3}></img>
</div>
    </div>
<div className='solutions_section_details'>

  <Arrow/>
  <div className='solutions_section_details_contents'>
    <Card text='Cargo loading platforms from "NQLYAT solutions" are designed to
     simplify your operations and keep your 
    cargo in constant motion. ' src={Number} />
    <Card text='We rely on actual transactions to deliver accurate market prices across various routes,
     while peer reviews direct you to the perfect carrier every time' src={Ok}/>
    <Card text='With "transportation solutions", you can publish and search for trucks without limits,
    and stay informed thanks to instant alerts even when you are offline' src={Track} />
  </div>

  <div className='solutions_platform'>
    <div >
      <img className='car1' src={car4}/>
      <img className='car2' src={car3}/>
    </div>
    <div>
    <img className='car3' src={car2}/>
    <img className='car4' src={car1}/>
    </div>
    <div className='solutions_platform_btns'>
      <div style={{color:"orangered" ,fontSize:'25px'}}>NQLYAT loading platform</div>
      <div className='transportations'>
<CheckBtn text='Transportations Solutions'/>
      </div>
    <  div className='transportations'>
<CheckBtn text='Shipping'/>
<CheckBtn text='Charger'/>
      </div>

      <  div className='transportations'>
<CheckBtn text='Middle East'/>
<CheckBtn text='North Africa'/>
      </div>
      <  div className='transportations'>
<CheckBtn text='loads'/>
<CheckBtn text='Communication'/>
      </div>
      <  div className='transportations'>
<CheckBtn text='Agreements'/>
<CheckBtn text='Acceleration'/>
      </div>
      <  div className='transportations'>
<CheckBtn text='Business growth.'/>
<CheckBtn text='Ease'/>
      </div>

    </div>
</div>
</div>

    </div>
 
  );
}

export default Solutions;
