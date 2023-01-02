import {Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import './App.css'
import { Register } from './components/Register';
import { Edit } from './components/Edit';
import { Details } from './components/Details';

function App() {
  return (
    <div className="App">
     
         <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/view/:id' element={<Details/>}/>
         </Routes>
     
    </div>
  );
}

export default App;
