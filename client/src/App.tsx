import { ThemeProvider } from "styled-components";
import {
  AdminSidebar,
  AdminTopBar,
  Header,
  ErrorMessage,
  RestaurantSidebar,
  Loader,
  SucessModal,
} from "./components";
import {
  AddRestuarant,
  Checkout,
  Home,
  Login,
  OrderInfo,
  Orders,
  Profile,
  Register,
  RestaurantInfo,
  Restaurants,
  VerifyOtp,
} from "./pages";
import { GlobalStyle } from "./styles/globalStyle";
import { lightTheme } from "./styles/themeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AdminRestaurants,
  AdminRestaurantSingle,
  AdminSingleApplication,
  Applications,
  Dashboard,
  UserInfo,
  Users,
} from "./pages/admin";
import styled from "styled-components";
import {
  AllProducts,
  NewProduct,
  RestaurantDashboard,
  RestaurantOrders,
  RestaurantProduct,
  RestaurantSingleOrder,
} from "./pages/restaurant-admin";
import { useErrorMessage, useFetchLoading, useSuccessModal } from "./hooks";

const FlexContainer = styled.div`
  display: flex;
`;

function App() {
  const { message } = useErrorMessage();
  const { isLoading } = useFetchLoading();
  const { state } = useSuccessModal();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {state.open && <SucessModal />}
        {isLoading && <Loader />}
        {message && <ErrorMessage />}
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
              path="/checkout"
              element={
                <>
                  <Header sticky />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/add-restaurant"
              element={
                <>
                  <Header sticky />
                  <AddRestuarant />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Header sticky />
                  <Orders />
                </>
              }
            />
            <Route
              path="/order/:id"
              element={
                <>
                  <Header sticky />
                  <OrderInfo />
                </>
              }
            />

            {/* Restaruant admin routes */}
            <Route path="/admin/restaurant">
              <Route
                path="dashboard"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <RestaurantDashboard />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="products"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <AllProducts />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="orders"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <RestaurantOrders />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="orders/:id"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <RestaurantSingleOrder />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="products/:id"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <RestaurantProduct />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="products/new"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <NewProduct />
                    </FlexContainer>
                  </>
                }
              />
            </Route>

            {/* Admin routes  */}

            <Route path="/admin">
              <Route
                path="applications"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <Applications />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="applications/:id"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <AdminSingleApplication />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="restaurants"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <AdminRestaurants />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="users"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <Users />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="users/:id"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <UserInfo />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="restaurants/:id"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <AdminRestaurantSingle />
                    </FlexContainer>
                  </>
                }
              />

              <Route
                path="dashboard"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <AdminSidebar />
                      <Dashboard />
                    </FlexContainer>
                  </>
                }
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
