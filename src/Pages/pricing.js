import Arrow from '../components/arrow';
import PricingCard from '../components/pricingCard';
import Image7 from '../images/7.png';
import Image8 from '../images/8.png';
import Image9 from '../images/9.png';
import Btn from '../components/btn';
import '../css/pricing.css';
function Bricing() {
  return (
    
  

 <div className='Pricing'>
    
<div className='Pricing_title'>
    <Arrow/>
    <div style={{textAlign:"center",width:'60%', color:'white' ,fontSize:"20px"}}>
    Elevate your organization with the leading Naqlyat loading panel for Achieve a national 
    vision for your loads and expand your capacity and profitability
     by using industry-leading load loading platforms for brokers from "NQLYATsolutions".
    </div>
</div>
<div className='Pricing_details'>
      <PricingCard src={Image7} 
      text={'Take advantage of the reliability and flexibility offered by NQLYAT solutions to upgrade your business as a broker.'} />

<PricingCard src={Image8}
 text={'Cargo loading platforms for brokers from "transport solutions" connect you with the widest network of drivers, allowing you to quickly match truckloads at the right price.'} />

<PricingCard src={Image9}
 text={'Take a positive step forward by monitoring capacity and taking advantage of our market trend data.'} />

  

    </div>
    <div style={{display:'flex' ,justifyContent:'center',alignItems:'center',position:'relative' ,top:'-100px'}}>  <Btn text={'Read More'} style={{width:'160px' ,fontWeight:'bold'}}/></div>
  
 </div>
   
   
   
  );
}

export default Bricing;