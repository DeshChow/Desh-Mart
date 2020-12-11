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
import { createContext, useState } from 'react';
import SingleProductDetails from './Components/SingleProductDetails/SingleProductDetails';
import InsertItem from './Components/InsertItem/InsertItem';
import DeleteItem from './Components/DeleteItem/DeleteItem';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import ReviewCart from './Components/ReviewCart/ReviewCart';
import CheckOut from './Components/CheckOut/CheckOut';
import PendingOrder from './Components/PendingOrder/PendingOrder';
import AdminOrderHistory from './Components/AdminOrderHistory/AdminOrderHistory';


export const UserContext = createContext();
function App() {

  const [userAction, setUserAction] = useState({

    showtopic: 'womensdress'
  })

  return (

    <UserContext.Provider value={[userAction, setUserAction]}>
      <Router>

        <NavBar></NavBar>


        <Switch>


          <Route exact path='/'>


            <Home></Home>

          </Route>
          <Route path='/AdminPanel'>

            <AdminPanel></AdminPanel>

          </Route>
          <Route path='/AdminInsertItem'>

            <InsertItem></InsertItem>

          </Route>

          <Route path='/AdminDeleteItem'>

            <DeleteItem></DeleteItem>


          </Route>
          <Route path='/AdminUpdateItem'>

            <UpdateItem></UpdateItem>


          </Route>
          <Route path='/product/:_id/:category'>

            <SingleProductDetails></SingleProductDetails>

          </Route>
          <Route path='/Details/:category'>



            <div >
              <SideItem></SideItem>
            </div>



            <div >



              <Details></Details>



            </div>








          </Route>



          <Route path='/ReviewCart'>

            <ReviewCart></ReviewCart>


          </Route>
          <Route path='/DeshMart/Checkout'>

            <CheckOut></CheckOut>

          </Route>

          <Route path='/AdminPendingOrder'>

            <PendingOrder></PendingOrder>

          </Route>

          <Route path='/AdminOrderHistory'>


          <AdminOrderHistory></AdminOrderHistory>
          </Route>


        </Switch>

      </Router>

    </UserContext.Provider>

  );
}

export default App;
