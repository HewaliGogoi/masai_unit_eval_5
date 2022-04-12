import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/employees" element={<EmployeeList/>}/>
        <Route path="/employees/create" element={<EmployeeCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
