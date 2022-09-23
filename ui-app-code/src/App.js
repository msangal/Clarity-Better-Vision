import './App.css';
import DefaultNavbar from './DefaultNavbar';
import Home from './Home';
import Donate from './Donate';
import Inventory from './Inventory';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultNavbar/>
        <Routes> 
          <Route exact path ="/" element={<Home />}/>
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
