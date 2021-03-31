import "./App.css";
import { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SavedMovies from "../SavedMovies/SavedMovies";
import api from "../../utils/api";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

const App = () => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState(true);
  const [isBurgerPressed, setIsBurgerPressed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "Аккаунт",
    email: "qwer@qwer.qwer",
    password: "qwerqwer",
    savedMovies: [],
  });

  const location = useLocation().pathname;

  useEffect(() => {
    setIsCardsLoaded(false);
    api
      .getCards()
      .then((cardsData) => {
        setIsCardsLoaded(true);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onBurgerClick = (e) => {
    if (isBurgerPressed) {
      setIsBurgerPressed(false);
    } else {
      setIsBurgerPressed(true);
    }
  };

  const handleMoviesButton = (user, movie) => {
    const newArray = [...user.savedMovies];
    if (!user.savedMovies.includes(movie.id)) {
      setUser({ ...user, savedMovies: [...user.savedMovies, movie.id] });
    } else {
      newArray.splice(user.savedMovies.indexOf(movie.id), 1);
      setUser({
        ...user,
        savedMovies: newArray,
      });
    }
    return;
  };

  const handleSavedMoviesButton = (user, movie) => {
    const newArray = [...user.savedMovies];
    newArray.splice(user.savedMovies.indexOf(movie.id), 1);
    setUser({
      ...user,
      savedMovies: newArray,
    });
    return;
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={user}>
        <Header
          loggedIn={loggedIn}
          user={user}
          isBurgerPressed={isBurgerPressed}
          onBurgerClick={onBurgerClick}
          setIsBurgerPressed={setIsBurgerPressed}
        />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            cards={cards}
            isCardsLoaded={isCardsLoaded}
            setUser={setUser}
            onCardButton={handleMoviesButton}
            location={location}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            cards={cards}
            isCardsLoaded={isCardsLoaded}
            user={user}
            setUser={setUser}
            onCardButton={handleSavedMoviesButton}
            location={location}
          />
        </Route>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Footer location={location} />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
