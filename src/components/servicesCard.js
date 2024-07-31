import '../css/servicesCard.css';

function ServicesCard({text, src, style, className}) {
  return (
    
  

    <div className="cardd"  style={{ ...style, backgroundImage: `url(${src})` }}> 
   
  {text}
    </div>
  
   
  );
}

export default ServicesCard;