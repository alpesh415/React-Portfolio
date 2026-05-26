import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Home from './Component/Home';
import Resume from './Component/Resume';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">

        <Navbar/>
        <Home/>
        <About/>
        <Resume/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
