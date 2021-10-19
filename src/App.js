import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './CommonParts/Header/Header';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Departments from './pages/Departments/Departments';
import Doctors from './pages/Doctors/Doctors';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Notfound from './pages/Notfound/Notfound';
import Footer from './CommonParts/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Contaxt/AuthProvider';
import PrivateServices from './pages/Home/Services/SingleService/PrivateServices';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
    <AuthProvider>
     <Router>
      <Header/>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <PrivateRoute path="/services/:serviceName">
           <PrivateServices/>
         </PrivateRoute>
         <PrivateRoute exact path="/departments">
           <Departments></Departments>
         </PrivateRoute>
         <Route exact path="/doctors">
           <Doctors></Doctors>
         </Route>
         <Route exact path="/about">
           <AboutUs></AboutUs>
         </Route>
         <Route exact path="/contact">
           <Contact></Contact>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
