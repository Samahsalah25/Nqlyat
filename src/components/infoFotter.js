import '../css/infoFotter.css';
function InfoFotter({text, icon}) {
  return (
    
  
<div style={{display:'flex' , gap:'10px'}}>
    <div className='icon_info' >
        {icon}
    </div>
    <div style={{fontSize:'12px', display:'flex', justifyContent:"center", alignItems:"center"}}>
        {text}
    </div>
</div>
   
   
   
  );
}

export default InfoFotter;