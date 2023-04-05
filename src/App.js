import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';



function App() {
  return (
    <div className="App">
   
   <NavigationComponent></NavigationComponent>
   <Routes>
    <Route exact path="/" element={<HomePage/>}></Route>
    <Route exact path="/sales" element={<SalesPage/>}></Route>
    <Route exact path="/about" element={<AboutPage/>}></Route>
    <Route exact path="/login" element={<LoginPage/>}></Route>
    <Route exact path="/user" element={<UserPage/>}></Route>
   </Routes>

    </div>
  );
}

export default App;
