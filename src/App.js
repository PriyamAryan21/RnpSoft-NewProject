import './App.css';
import Navbar from "./Components/Navbar"
import Services from './Components/Services';
import Home from './Components/Home'
import FAQ from './Components/Faq'
import Popular from './Components/Popularques'
import Meet from "./Components/meet";
import Reviews from './Components/Reviews';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home />
        <Services />
        <FAQ />
        <Popular />
        <Reviews />
        <Meet />
        <ContactForm />

      </div>
    </>
  );
}

export default App;
