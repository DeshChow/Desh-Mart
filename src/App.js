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

import { createContext, useState } from 'react';
import SingleProductDetails from './Components/SingleProductDetails/SingleProductDetails';
import InsertItem from './Components/InsertItem/InsertItem';
import DeleteItem from './Components/DeleteItem/DeleteItem';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import ReviewCart from './Components/ReviewCart/ReviewCart';
import CheckOut from './Components/CheckOut/CheckOut';
import PendingOrder from './Components/PendingOrder/PendingOrder';
import AdminOrderHistory from './Components/AdminOrderHistory/AdminOrderHistory';
import Login from './Components/Login/Login';
import AdminPendingReview from './Components/AdminPendingReview/AdminPendingReview';
import ReviewShow from './Components/ReviewShow/ReviewShow';
import FootItem from './Components/FootItem/FootItem';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';


export const UserContext = createContext();
function App() {

  const [userAction, setUserAction] = useState({

    showtopic: 'womensdress'
  })

  return (

    //<UserContext.Provider value={[userAction, setUserAction]}>
    <Router>

      <NavBar></NavBar>


      <Switch>


        <Route exact path='/'>


          <Home></Home>

        </Route>

        <Route path='/home'>


          <Home></Home>

        </Route>
        <PrivateRoute path='/AdminPanel'>

          <AdminPanel></AdminPanel>

        </PrivateRoute>
        <PrivateRoute path='/AdminInsertItem'>

          <InsertItem></InsertItem>

        </PrivateRoute>

        <PrivateRoute path='/AdminDeleteItem'>

          <DeleteItem></DeleteItem>


        </PrivateRoute>
        <PrivateRoute path='/AdminUpdateItem'>

          <UpdateItem></UpdateItem>


        </PrivateRoute>

        <Route path='/product/:_id/:category'>

          <SingleProductDetails></SingleProductDetails>

        </Route>

        <Route path='/Details/:category'>




          <Details></Details>






        </Route>



        <Route path='/ReviewCart'>

          <ReviewCart></ReviewCart>


        </Route>
        <Route path='/DeshMart/Login'>

          <Login></Login>


        </Route>
        <PrivateRoute path='/DeshMart/Checkout'>

          <CheckOut></CheckOut>

        </PrivateRoute>

        <PrivateRoute path='/AdminPendingOrder'>

          <PendingOrder></PendingOrder>

        </PrivateRoute>

        <PrivateRoute path='/AdminOrderHistory'>


          <AdminOrderHistory></AdminOrderHistory>
        </PrivateRoute>

        <PrivateRoute path='/AdminPendingReview'>


          <AdminPendingReview></AdminPendingReview>
        </PrivateRoute>

        <Route path='/ReviewShow'>

          <ReviewShow></ReviewShow>

        </Route>

        <Route path='*'>

          <NotFound></NotFound>

        </Route>



      </Switch>


    </Router>




    //  </UserContext.Provider>

  );
}

export default App;
