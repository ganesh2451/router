
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import Support from './components/Support';
import { Link, NavLink } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">

          <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Support">Support</NavLink></li>
            <li><NavLink to="/Labs">Labs</NavLink> 
            </li>
          </ul>
          </nav>

        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Support" element={<Support></Support>}/>
          <Route path="/About" element={<About></About>}/>
          <Route path="/Labs" element={<Labs></Labs>}/>
          <Route path="*" element={<div>404 Not Found</div>}/>
        </Routes>
    </div>
  );
}

export default App;
