import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';
import Cars from './Cars.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const headerInfo = [
    {
      nav11:"Car",
      nav12:"Book",
      nav2:"Home",
      nav3:"About",
      nav4:"Services",
      nav5:"Cars",
      nav6:"Blog",
      nav7:"Contact",
    }
  ]

  const hInfo = [
    {
      p1:"Fast & Easy Way To Rent A Car",
      p2:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.",
      p3:"Easy steps for renting a car",
      p4:"Make your trip",
      p5:"PICK-UP LOCATION",
      p6:"DROP-OFF LOCATION",
      p7:"PICK-UP DATE",
      p8:"DROP-OFF DATE",
      p9:"PICK-UP TIME",
      p10:"Rent A Car Now",
      p11:"Better Way to Rent Your Perfect Cars",
      p12:"Choose Your Pickup Location",
      p13:"Select the Best Deal",
      p14:"Reserve Your Rental Car",
      p15:"Reserve Your Perfect Car",
      title1:"What We Offer",
      subTitle1: "Featured Vehicles",
      title2:"Blog",
      subTitle2: "Recent Blog"
    }
  ]

  const contactInfo = [
    {
      p1:"Address",
      p2:"198 West 21th Street, Suite 721 New York NY 10016",
      p3:"Phone",
      p4:"+ 1235 2355 98",
      p5:"Email",
      p6:"nfo@yoursite.com",
      p7:"Send Message"
    }
  ]

  const footerInfo = [
    {
      head11:"CAR",
      head12:"BOOK",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      head2: "Information",
      li11:"About",
      li12:"Services",
      li13:"Term and Conditions",
      li14:"Best Price Guarantee",
      li15:"Privacy & Cookies Policy",
      head3: "Customer Support",
      li21:"FAQ",
      li22:"Payment Options",
      li23:"Booking Tips",
      li24:"How it works",
      li25:"Contact Us",
      head4: "Have a Questions?",
      li31:"203 Fake St. Mountain View, San Francisco, California, USA",
      li32:"+2 392 3929 210",
      li33:"info@yourdomain.com",
      copy:"Copyright ©2024 All rights reserved | This template is made with "
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Header info={headerInfo[0]}/>
          <Routes>
              <Route path='*' element={<Home info={hInfo[0]}/>}/>
              <Route path='/Home' element={<Home info={hInfo[0]}/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='/Cars' element={<Cars/>}/>
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/Contact' element={<Contact info={contactInfo[0]}/>}/>
          </Routes>
          <Footer info={footerInfo[0]}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
