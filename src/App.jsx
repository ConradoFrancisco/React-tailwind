import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Signin from './views/Signin';
import Signup from './views/Signup';
import Home from './views/Home';
import Admin from './views/Admin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='Admin' element ={<Admin/>}></Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App
