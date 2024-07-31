

import Header from '../components/header';
import Navpar from '../components/navpar';
import Solutions from './solutions';
import Bricing from './pricing';
import Services from './services';
import AboutUs from './aboutus';
import Contact from './contact';
import Footer from './footer';
function LandingPage() {
  return (
    
   <div>

  
   <Navpar/>
      <Header/>
      <Solutions/>
      <Bricing/>
     <Services/>
     <AboutUs/>
     <Contact/>
     <Footer/>
   
    </div>
  );
}

export default LandingPage;
