import Input from '../components/input';
import Selection from '../components/selection';
import '../css/contact.css';

function Contact() {
  return (
    
  <div className='contact'>
<div style={{fontSize:'28px' ,fontWeight:'400px' , color:"white"}}> <span style={{color:"#F05326"}} >Get</span> a Competitive Instant Quote</div>
 <div className='contact_title' style={{fontSize:"16px" ,paddingTotop:"10px" ,width:"45%", fontWeight:'bold' }}>
 Fill out the form for LTL and Full Truckload rates. Quick access without login! 
 </div>
<div className='contact_details'>
  <form className='contact_form'>
{/* first */}
<div className='form_inputs'>
  <Selection label={'Pickup location'} option1={'  Cairo'} option2={'Ismailia'} placeholder={'📍 Pickup location'}/>
<Input label={'Date'} placeholder={'mm/dd/yyyy'} type={'date'}/>
</div>
{/* seconfd row */}
<div className='form_inputs'>
  <Selection label={'Delivery Locations'} option1={' Ismailia'} option2={'Cairo'} placeholder={'📍 Delivery location'}/>
<Input label={'Date'} placeholder={'mm/dd/yyyy'} type={'date'}/>
</div>
{/* 3  */}

<div className='form_inputs'>
<Input label={'weight (tons)'} placeholder={'weight (tons)'} type={'number'} min={'5'} max={'100'} />
<Input label={'load category'} placeholder={'load category'} type={'text'}/>
</div>
{/* 4 */}
<div className='form_inputs'>
<Input label={'company name'} placeholder={'company name'} type={'text'} />
<Input label={'Email'} placeholder={' ✉️ Email'} type={'email'}/>
</div>
{/* 5 */}
<div className='form_inputs'>
<Input label={'First Name'} placeholder={'First Name'} type={'text'} />
<Input label={'second Name'} placeholder={'second Name'} type={'email'}/>
</div>
<button className='form_btn'  style={{height:'45px' }}>
  Requst Your Quote
</button>

  </form>
  <div className='contact_image'>
  </div>

</div>



  </div>
   
   
  );
}

export default Contact;