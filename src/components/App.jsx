import React, { useEffect } from "react";
import Login from "./Welcome/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "~/firebase";
import Home from "./Home/Home";
import Register from "./Welcome/Register";
import { useDispatch, useSelector } from "react-redux";
import { login } from "~/userSlice";
import Profile from "./Home/Profile";
function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
      }
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <div className="app">
        <Router>
          {!user ? (
            <Register />
          ) : (
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/profile">
                <Profile> </Profile>
              </Route>
            </Switch>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
