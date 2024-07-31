import '../css/btn.css';
function Btn({text, style, className}) {
  return (
    
  

  <button  className={`button ${className} btnn`}
  style={style} >{text}</button>
   
   
   
  );
}

export default Btn;