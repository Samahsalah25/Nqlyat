import '../css/input.css';
function Input({label,type, placeholder, min, max}) {
  return (
    
  

 <div className='input'>
    <label style={{fontWeight:'bold' , fontSize:'14px'}}>{label}</label>
    <input className='inputstyle' type={type} placeholder={placeholder} min={min} max={max} />

 </div>
   
   
   
  );
}

export default Input;