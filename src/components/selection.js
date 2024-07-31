import '../css/selection.css';
function Selection({label,type, placeholder, icon ,option1 ,option2}) {
  return (
    
  

 <div className='inputt'>
    <label style={{fontWeight:'bold' , fontSize:'14px'}}>{label}</label>
   <select  style={{height:'34px', border:"none", fontSize:'12px' ,width:'240px'}} className='inputstylee'  >
   <option value="" disabled selected hidden>{placeholder}</option>
<option>
    {option1}
</option>
<option>
    {option2}
</option>
   </select>

 </div>
   
   
   
  );
}

export default Selection;