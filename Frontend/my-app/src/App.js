
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import User from './Component/getUser/User';
import Add from './Component/addUser/Add';
import Edit from './Component/Updateuser/Edit';
function App() {
 return(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<User/>} />
    <Route exact path='/add' element={<Add/>} />
    <Route exact path='/edit/:id' element={<Edit/>}/>

  </Routes>
  </BrowserRouter>
 );
}

export default App;
