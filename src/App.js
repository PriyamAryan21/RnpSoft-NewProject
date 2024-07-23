import './App.css';
import Navbar from "./Components/Navbar"
import Services from './Components/Services';
import Home from './Components/Home'
import FAQ from './Components/Faq'
import Popular from './Components/Popularques'
import Meet from "./Components/meet";
// import ContactForm from './Components/ContactForm';
import Reviews from './Components/Reviews';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <FAQ/>
    <Popular/>
    <Reviews/>
    <Meet/>
    {/* <ContactForm/> */}
    </>
  );
}

export default App;
