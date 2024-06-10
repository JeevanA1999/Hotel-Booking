import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Rooms from "./Components/Rooms";
import Customer from "./Components/Customer";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Booking from './Components/Booking'


function App() {
  return (
    <Router>
      <Navbar />

      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/booking/:room/:price"  element={<Booking/>}/>
        {/* */}
        {/* <Route path="rooms" component={<Rooms/>} /> */}
        {/* <Route path="/events" component={Events} />
        <Route path="/customers" component={Customers} />
         */}
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
