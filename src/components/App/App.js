import "./App.css";
import { useState, useEffect, memo } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SavedMovies from "../SavedMovies/SavedMovies";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [cards, setCards] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState(true);
  const [isBurgerPressed, setIsBurgerPressed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  const [user, setUser] = useState({
    name: "Аккаунт",
    email: "qwer@qwer.qwer",
    savedMovies: [],
  });

  const headerLocations = [
    "/",
    "/movies",
    "/signin",
    "/signup",
    "/saved-movies",
    "/profile",
  ];

  const footerLocations = ["/", "/movies", "/saved-movies"];

  const centeredLocations = ["/signup", "/signin"];

  const location = useLocation().pathname;
  // console.log("loggedIn: " + loggedIn);
  // console.log("cards: " + cards);
  useEffect(() => {
    mainApi
      .getUser()
      .then((currentUser) => {
        setUser(currentUser);
        setLoggedIn(true);
        setIsUserDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setIsCardsLoaded(false);
    moviesApi
      .getCards()
      .then((cardsData) => {
        setIsCardsLoaded(true);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

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

  const register = ({ name, password, email }) => {
    return mainApi
      .register({ name, password, email })
      .then((registeredUser) => registeredUser);
  };

  const login = ({ email, password }) => {
    return mainApi.login({ email, password }).then((user) => {
      setUser(user);
      return user;
    });
  };

  const logout = () => {
    return mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`app ${
        centeredLocations.some((loc) => loc === location) && "app_centered"
      }`}
    >
      <CurrentUserContext.Provider value={user}>
        {headerLocations.some((loc) => loc === location) && (
          <Header
            loggedIn={loggedIn}
            isBurgerPressed={isBurgerPressed}
            onBurgerClick={onBurgerClick}
            setIsBurgerPressed={setIsBurgerPressed}
            location={location}
          />
        )}
        {/* <Switch> */}
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          component={Movies}
          cards={cards}
          isCardsLoaded={isCardsLoaded}
          setUser={setUser}
          onCardButton={handleMoviesButton}
          location={location}
          loggedIn={loggedIn}
          path="/movies"
          isUserDataLoaded={isUserDataLoaded}
        />

        {/* <Route path="/saved-movies">
            <SavedMovies
              cards={cards}
              isCardsLoaded={isCardsLoaded}
              user={user}
              setUser={setUser}
              onCardButton={handleSavedMoviesButton}
              location={location}
            />
        </Route> */}
        {/* <Route path="/profile">
          <Profile user={user} setLoggedIn={setLoggedIn} logout={logout} />
        </Route> */}
        <Route path="/signup">
          <Register
            register={register}
            login={login}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route path="/signin">
          <Login setLoggedIn={setLoggedIn} setUser={setUser} login={login} />
        </Route>
        {/* <Route path="*">
            <PageNotFound />
          </Route>
        </Switch> */}
        {footerLocations.some((loc) => loc === location) && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
