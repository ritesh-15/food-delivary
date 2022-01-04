import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import {
  Checkout,
  CompleteProfile,
  Home,
  Login,
  Profile,
  Register,
  RestaurantInfo,
  Restaurants,
  VerifyOtp,
} from "./pages";
import { GlobalStyle } from "./styles/globalStyle";
import { lightTheme } from "./styles/themeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header sticky />
                  <Home />
                </>
              }
            />
            <Route
              path="/account"
              element={
                <>
                  <Header sticky />
                  <Profile />
                </>
              }
            />

            {/* protected until enter location */}
            <Route path="/restaurants">
              <Route
                path=""
                element={
                  <>
                    <Header sticky />
                    <Restaurants />
                  </>
                }
              />
              <Route
                path=":id"
                element={
                  <>
                    <Header />
                    <RestaurantInfo />
                  </>
                }
              />
            </Route>
            <Route
              path="/login"
              element={
                <>
                  <Header sticky />
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Header sticky />
                  <Register />
                </>
              }
            />
            <Route
              path="/verify-otp"
              element={
                <>
                  <Header sticky />
                  <VerifyOtp />
                </>
              }
            />
            <Route
              path="/complete-profile"
              element={
                <>
                  <Header sticky />
                  <CompleteProfile />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header sticky />
                  <Checkout />
                </>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;