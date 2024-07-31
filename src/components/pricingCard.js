import '../css/pricingcard.css'
function PricingCard({src,text}) {
  return (
    
  
<div className='Card_pricing'>
<img style={{height:'200px' }} src ={src}/>
<div style={{textAlign:'center' ,padding:'20px' ,fontSize:'14px'}}>{text}</div>
    
</div>
   
   
   
  );
}

export default PricingCard;