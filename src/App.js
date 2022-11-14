import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Addcoin from './Components/Addcoin';
import VoteCoin from './Components/VoteCoin';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>

        <Navbar title="Amazing Web"/>
        <div className="container">

     <Routes>
          {/* <Route path="/votecoin">
          <div className="container my-5">
    <VoteCoin/>

    </div>
          </Route> */}
          <Route path='/' element={<Addcoin/>} />
          <Route path='/votecoin' element={<VoteCoin/>} />
        </Routes>
        </div>

        </Router>
    </>
  );
}

export default App;
