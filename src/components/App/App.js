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

  useEffect(() => {
    mainApi
      .getUser()
      .then((currentUser) => {
        setUser(currentUser);
        setLoggedIn(true);
        setIsInitialDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setIsInitialDataLoaded(true);
      });
  }, []);

  const onRegisterSubmit = (
    { name, password, email },
    setButtonText,
    setSubmitStatus,
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
      .then(() => {
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

  const onMoviesPageLoad = (setCards, setIsCardsLoaded, setLikeIds) => {
    moviesApi
      .getCards()
      .then((cardsData) => {
        setCards(cardsData);
        if (localStorage.getItem("cards") === null) {
          localStorage.setItem("cards", JSON.stringify(cardsData));
        } else {
          setCards(JSON.parse(localStorage.getItem("cards")));
        }
      })
      .then(() => mainApi.getMovies())
      .then((movies) => {
        setLikeIds(movies.map((movie) => movie.movieId));
        setIsCardsLoaded({
          done: true,
          status: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsCardsLoaded({
          done: true,
          status: false,
        });
      });
  };

  const onSavedMoviesPageLoad = (setCards, setIsCardsLoaded) => {
    mainApi
      .getMovies()
      .then((moviesData) => {
        setCards(
          moviesData.map((movie) => {
            if (movie.owner === user._id) {
              return movie;
            }
            return;
          })
        );
        setIsCardsLoaded({
          done: true,
          status: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsCardsLoaded({
          done: true,
          status: false,
        });
      });
  };

  const saveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => console.log(data))
      .catch((err) => console.log(err.validation));
  };

  const deleteMovie = (id) => {
    console.log(id);
    if (typeof id === "number") {
      console.log("in");
      mainApi
        .getMovies()
        .then((movies) => {
          console.log(movies);
          movies.forEach((movie) => {
            if (movie.movieId === id) {
              console.log(movie._id);
              mainApi.deleteMovie(movie._id);
            }
          });
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      mainApi
        .deleteMovie(id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err.validation));
    }
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
            <Register onRegisterSubmit={onRegisterSubmit} />
          </Route>
          <Route path="/signin">
            <Login onLoginSubmit={onLoginSubmit} />
          </Route>
          <ProtectedRoute
            component={Movies}
            onLoad={onMoviesPageLoad}
            loggedIn={loggedIn}
            isInitialDataLoaded={isInitialDataLoaded}
            path="/movies"
            currentLocation={location}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
          />
          <ProtectedRoute
            component={SavedMovies}
            currentLocation={location}
            isInitialDataLoaded={isInitialDataLoaded}
            loggedIn={loggedIn}
            deleteMovie={deleteMovie}
            onLoad={onSavedMoviesPageLoad}
            path="/saved-movies"
          />
          <ProtectedRoute
            component={Profile}
            loggedIn={loggedIn}
            isInitialDataLoaded={isInitialDataLoaded}
            user={user}
            logout={logout}
            path="/profile"
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
