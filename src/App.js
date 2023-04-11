import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
   
  
   <NavigationComponent></NavigationComponent>
  
   <Routes>
    <Route exact path="/" element={<HomePage/>}></Route>
    <Route exact path="/sales" element={<SalesPage/>}></Route>
    <Route exact path="/about" element={<AboutPage/>}></Route>
    <Route exact path="/login" element={<LoginPage/>}></Route>
    <Route exact path="/register" element={<RegisterPage/>}></Route>
   </Routes>
 
  <Footer/>
    </div>
  );
}

export default App;
