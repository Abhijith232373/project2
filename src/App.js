// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Dashborad from './Components/Dashborad';




function App() {
  return (
    <div className="App">
     
    <Navbar/>
    <Home/>
      <Routes>
        <Route path='/log' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        {/* <Route path='/Dashborad' element={<Dashborad/>}/> */}
      </Routes> 
     
    </div>
  );
}

export default App;
