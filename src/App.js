// import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Allroute from './Allroutes/Route';
// import {signInGoogle}  from './firebae';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Allroute/>
      <Footer/>

    </div>

  );
}

export default App;
