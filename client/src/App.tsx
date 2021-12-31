import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import {
  CompleteProfile,
  Home,
  Login,
  Register,
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
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="/restaurants"
              element={
                <>
                  <Header />
                  <Restaurants />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Header />
                  <Register />
                </>
              }
            />
            <Route
              path="/verify-otp"
              element={
                <>
                  <Header />
                  <VerifyOtp />
                </>
              }
            />
            <Route
              path="/complete-profile"
              element={
                <>
                  <Header />
                  <CompleteProfile />
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
