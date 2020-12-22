
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({children, ...rest}) => {

    

    

    return (
        <Route
      {...rest}
      render={({ location }) =>
       (sessionStorage.getItem('DeshMart')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/DeshMart/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;