
import '../css/footer.css';
import { FaInstagram } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import logo from '../images/logo.png'
import InfoFotter from '../components/infoFotter';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
function Footer() {
  return (
 <div className='footer'>
   <div className='footer_info'>
  <div className='logo'>
    <img src={logo}/>
    <div style={{fontSize:'14px'}}>Nqlyat solutions: the leading shipping platform with superior service quality</div>
  <div  style={{fontSize:'25px', fontWeight:"bold"}}>Get in touch</div>
  <InfoFotter icon={<MdOutlineMail />} text='marie28@yahoo.com'/>
  <InfoFotter icon={<MdOutlineMail />} text='marie28@yahoo.com'/>
  <InfoFotter icon={<FaPhoneVolume />} text='360.766.0553'/>
  <InfoFotter icon={<FaPhoneVolume />} text='360.766.0553'/>
  </div>
  <div className='name'>
    <div className='comp' style={{fontWeight:'bold', fontSize:'30px'}}> Company    </div>
    <div className='navv'>Home</div>
    <div className='navv'>Solution</div>
    <div className='navv'>Pricing</div>
    <div className='navv'>Services</div>
    <div className='navv'>About Us</div>
    <div className='navv'>News</div>
    <div className='navv'>Contact Us</div>
    


  </div>
   </div>

<div className='footer_image'>
    <div style={{fontSize:"26px" ,  fontWeight:'bold'}}>
        Subscribe
    </div>
    <div className='input_div' style={{display:'flex', gap:"10px"} }>
  <input placeholder='Your Email Adress' type='text' className='input_footer' />
    <button className='btn' style={{display:'flex', justifyContent:"center" , alignItems:'center' , background:"#F05326" ,border:'none'} }>Subscribe</button>
    </div>
    <div className='footer_icons'>
    <FaInstagram className='social' />
    <RiThreadsFill className='social' />
    <FaXTwitter className='social' />
    <FaFacebook  className='social'/>


    </div>
  
<div>

</div>
</div>
 </div>
   
   
   
  );
}

export default Footer;