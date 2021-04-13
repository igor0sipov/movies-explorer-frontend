import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const [user, setUser] = useState({
    name: "UserName",
    email: "some@example.com",
  });
  const location = useLocation().pathname;
  const centeredLocations = ["/signup", "/signin"];
  const footerLocations = ["/", "/movies", "/saved-movies"];
  const headerLocations = [
    "/",
    "/movies",
    "/signin",
    "/signup",
    "/saved-movies",
    "/profile",
  ];
  const [cards, setCards] = useState([]);
  const [likeIds, setLikeIds] = useState([]);
  const [isCardsLoaded, setIsCardsLoaded] = useState({
    done: false,
    ok: false,
  });

  useEffect(() => {
    mainApi
      .getUser()
      .then((currentUser) => {
        setUser(currentUser);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setIsInitialDataLoaded(true);
      });

    moviesApi
      .getCards()
      .then((cardsData) => {
        localStorage.setItem("cards", JSON.stringify(cardsData));
      })
      .then(() => {
        setCards(JSON.parse(localStorage.getItem("cards")));
        setIsCardsLoaded({
          done: true,
          ok: true,
        });
        setIsInitialDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsCardsLoaded({
          done: true,
          ok: false,
        });
      });
  }, []);

  const onRegisterSubmit = (
    { name, password, email },
    setSubmitStatus,
    setButtonText,
    history
  ) => {
    setButtonText("Регистрация...");
    mainApi
      .register({ name: name.text, password: password.text, email: email.text })
      .then(() => {
        setButtonText("Успешно!");
        return mainApi.login({
          email: email.text,
          password: password.text,
        });
      })
      .then((user) => {
        setUser(user);
        setTimeout(() => {
          setLoggedIn(true);
          history.push("/movies");
        }, 1300);
      })
      .catch((error) => {
        console.log(error);
        setButtonText("Ошибка");
        setSubmitStatus({
          ok: false,
          errorText: error.message,
        });
        setTimeout(() => {
          setButtonText("Зарегистрироваться");
        }, 1300);
      });
  };

  const onLoginSubmit = (
    { email, password },
    setSubmitStatus,
    setButtonText,
    history
  ) => {
    setButtonText("Вход...");
    mainApi
      .login({ email: email.text, password: password.text })
      .then((user) => {
        setUser(user);
        return user;
      })
      .then(() => {
        setSubmitStatus({
          ok: true,
          errorText: "",
        });
        setButtonText("Успешно!");
        setTimeout(() => {
          setLoggedIn(true);
          history.push("/movies");
        }, 1300);
      })
      .catch((error) => {
        console.log(error);
        setButtonText("Ошибка");
        setSubmitStatus({
          ok: false,
          errorText: error.message,
        });
        setTimeout(() => {
          setButtonText("Войти");
        }, 1300);
      });
  };

  const logout = (history) => {
    return mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onMoviesPageLoad = () => {
    setIsCardsLoaded({
      done: false,
      ok: false,
    });
    mainApi
      .getMovies()
      .then((movies) => {
        setLikeIds(
          movies
            .map((movie) => {
              if (movie.owner === user._id) {
                return movie.movieId;
              }
            })
            .filter((id) => id !== undefined)
        );
        setIsCardsLoaded({
          done: true,
          ok: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsCardsLoaded({
          done: true,
          ok: false,
        });
      });
  };

  const onSavedMoviesPageLoad = (setCards, setIsCardsLoaded) => {
    mainApi
      .getMovies()
      .then((moviesData) => {
        setCards(moviesData.filter((movie) => movie.owner === user._id));
        setIsCardsLoaded({
          done: true,
          ok: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsCardsLoaded({
          done: true,
          ok: false,
        });
      });
  };

  const cardButtonHandlers = {
    saveMovie: (movie) => {
      mainApi.addMovie(movie).catch((err) => console.log(err));
    },
    deleteMovie: (id) => {
      if (typeof id === "number") {
        mainApi
          .getMovies()
          .then((movies) => {
            movies.forEach((movie) => {
              if (movie.movieId === id) {
                mainApi.deleteMovie(movie._id);
              }
            });
          })

          .catch((err) => {
            console.log(err);
          });
      } else {
        mainApi.deleteMovie(id).catch((err) => console.log(err.validation));
      }
    },
  };

  const onProfileEdit = (
    { name, email },
    setSubmitStatus,
    setIsEditPressed,
    setButtonText
  ) => {
    setButtonText("Сохранение...");
    mainApi
      .editUser({ name, email })
      .then((editedData) => {
        setSubmitStatus({
          ok: true,
          errorText: "",
        });
        setButtonText("Успешно!");
        setTimeout(() => {
          setUser(editedData);
          setIsEditPressed(false);
          setButtonText("Сохранить");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setButtonText("Ошибка!");
        setTimeout(() => {
          setButtonText("Сохранить");
        }, 1500);
        setSubmitStatus({
          ok: false,
          errorText: err.message,
        });
      });
  };

  const checkValidity = (e) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.name === "email") {
      return emailRegex.test(e.target.value);
    }
    return e.target.validity.valid;
  };

  return (
    <div
      className={`app ${
        centeredLocations.some((loc) => loc === location) && "app_centered"
      }`}
    >
      <CurrentUserContext.Provider value={user}>
        {headerLocations.some((loc) => loc === location) && (
          <Header loggedIn={loggedIn} location={location} />
        )}

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register
              onRegisterSubmit={onRegisterSubmit}
              checkValidity={checkValidity}
            />
          </Route>
          <Route path="/signin">
            <Login
              onLoginSubmit={onLoginSubmit}
              checkValidity={checkValidity}
            />
          </Route>
          <ProtectedRoute
            component={Movies}
            onLoad={onMoviesPageLoad}
            loggedIn={loggedIn}
            isInitialDataLoaded={isInitialDataLoaded}
            path="/movies"
            styleClass="movies"
            currentLocation={location}
            cardButtonHandlers={cardButtonHandlers}
            cards={cards}
            isCardsLoaded={isCardsLoaded}
            likeIds={likeIds}
          />
          <ProtectedRoute
            component={SavedMovies}
            currentLocation={location}
            isInitialDataLoaded={isInitialDataLoaded}
            loggedIn={loggedIn}
            cardButtonHandlers={cardButtonHandlers}
            onSavedMoviesPageLoad={onSavedMoviesPageLoad}
            path="/saved-movies"
            styleClass="saved-movies"
          />
          <ProtectedRoute
            component={Profile}
            loggedIn={loggedIn}
            isInitialDataLoaded={isInitialDataLoaded}
            user={user}
            logout={logout}
            path="/profile"
            onProfileEdit={onProfileEdit}
            checkValidity={checkValidity}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {footerLocations.some((loc) => loc === location) && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
