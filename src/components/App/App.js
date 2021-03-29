import "./App.css";
import { useState } from "react";
import { Route } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Аккаунт");
  const [isBurgerPressed, setIsBurgerPressed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: "Аккаунт",
    savedMovies: [],
  });

  const onBurgerClick = (e) => {
    if (isBurgerPressed) {
      setIsBurgerPressed(false);
    } else {
      setIsBurgerPressed(true);
    }
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={user}>
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
          <Movies setUser={setUser} />
        </Route>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
