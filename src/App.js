
import './App.css';
import About from './Componunts/About';
import Contact from './Componunts/Contact';
import Home from './Componunts/Home';
import Navbar from './Componunts/Navbar';
import Project from './Componunts/Projects/Project';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
    
     <About/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
