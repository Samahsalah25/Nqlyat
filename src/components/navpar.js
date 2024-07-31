
import '../css/navpar.css';
import logo from '../images/logo.png';
function Navpar() {
  return (
    
    <div className='nav' >
  <div className='navpar'>
    <div className='logo'>
       <img src={logo} alt='Logo' />
    </div>
    <div className='menubar'>
<nav className='menubar_header'>
    <li className='active'>Home</li>
    <li>Solutions</li>
    <li>Pricing</li>
    <li>Services</li>
    <li>About Us</li>
</nav>
<div className='menubar_reg'>
<div >
Login
</div>
<div className='active'>
Sign Up
</div>
</div>
    </div>

  </div>

    </div>
  );
}

export default Navpar;
