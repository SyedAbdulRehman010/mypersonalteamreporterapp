import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import {SignUp} from './SignUp';
import {SignIn} from './signIn';
function App() {
  return (
 <>
 
<Routes>
<Route path='/' element= {<SignUp/>}/>
<Route path='signin' element= {<SignIn/>}/>
</Routes>



 
 </>
   
  );
}

export default App;
