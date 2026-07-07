import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Skills from './Component/Skills';


function App() {
  return (
    <div className="App">

       <Navbar/>
       {/* <Home/>
       <About/>
       <Skills/>
       <Project/>
       <Contact/> */}
     

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
         <Footer/>
    </div>
  );
}

export default App;
