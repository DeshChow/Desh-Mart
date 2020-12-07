import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import AdminPanel from './Components/AdminPanel/AdminPanel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details/Details';
import NavBar from './Components/NavBar/NavBar';
import SideItem from './Components/SideItem/SideItem';
import { createContext,useState } from 'react';


export const UserContext=createContext();
function App() {

  const [userAction,setUserAction] = useState({
       
         showtopic : 'womensdressProducts'
  })

  return (

    <UserContext.Provider value={[userAction,setUserAction]}>
    <Router>

  <NavBar></NavBar>


      <Switch>


        <Route exact path='/'>

         
          <Home></Home>

        </Route>
        <Route path='/AdminPanel'>

          <AdminPanel></AdminPanel>

        </Route>
        <Route path='/Details'>
          <div>

            <div >
         <SideItem></SideItem>
            </div>


            <div >

              <Details></Details>



            </div>
          </div>

        </Route>


      </Switch>

    </Router>

    </UserContext.Provider>

  );
}

export default App;
