import "./App.css";
import { useState } from "react";
import { Route } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Аккаунт");
  const [isBurgerPressed, setIsBurgerPressed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const onBurgerClick = (e) => {
    if (isBurgerPressed) {
      setIsBurgerPressed(false);
    } else {
      setIsBurgerPressed(true);
    }
  };

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        user={currentUser}
        isBurgerPressed={isBurgerPressed}
        onBurgerClick={onBurgerClick}
      />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
