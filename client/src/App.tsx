import { ThemeProvider } from "styled-components";
import {
  AdminSidebar,
  AdminTopBar,
  Header,
  ErrorMessage,
  RestaurantSidebar,
  Loader,
  SucessModal,
  Address,
  Cart,
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
  RestaurantApplication,
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
  RestaurantDetails,
} from "./pages/restaurant-admin";
import {
  useFetchLoading,
  useMessage,
  useRefresh,
  useSocket,
  useSuccessModal,
} from "./hooks";
import Protected from "./routes/Protected";
import RestaurantAdmin from "./routes/RestaurantAdmin";
import AdminRoute from "./routes/AdminRoute";
import AuthRoutes from "./routes/AuthRoutes";
import VerifyOtpRoute from "./routes/VerifyOtpRoute";
import HomeRoute from "./routes/HomeRoute";
import useRestaurant from "./hooks/get-restaurant/useRestaurant";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const FlexContainer = styled.div`
  display: flex;
`;

function App() {
  const { message } = useMessage();
  const { isLoading } = useFetchLoading();
  const { state } = useSuccessModal();

  const isCartSidebarOpen = useSelector(
    (state: RootState) => state.cartSidebar.open
  );

  useRefresh();
  useSocket();
  useRestaurant();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {state.open && <SucessModal />}
        {isLoading && <Loader />}
        {/* <Address /> */}
        {message && <ErrorMessage />}
        {isCartSidebarOpen && <Cart />}
        <Router>
          <Routes>
            <Route path="/" element={<HomeRoute />}>
              <Route
                path="/"
                element={
                  <>
                    <Header sticky />
                    <Home />
                  </>
                }
              />
            </Route>
            <Route path="/account" element={<Protected />}>
              <Route
                path="/account"
                element={
                  <>
                    <Header sticky />
                    <Profile />
                  </>
                }
              />
            </Route>

            <Route path="/application" element={<Protected />}>
              <Route
                path="/application"
                element={
                  <>
                    <Header sticky />
                    <RestaurantApplication />
                  </>
                }
              />
            </Route>

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
            <Route path="/login" element={<AuthRoutes />}>
              <Route
                path=""
                element={
                  <>
                    <Header sticky />
                    <Login />
                  </>
                }
              />
            </Route>

            <Route path="/register" element={<AuthRoutes />}>
              <Route
                path="/register"
                element={
                  <>
                    <Header sticky />
                    <Register />
                  </>
                }
              />
            </Route>

            <Route element={<VerifyOtpRoute />}>
              <Route
                path="/verify-otp"
                element={
                  <>
                    <Header sticky />
                    <VerifyOtp />
                  </>
                }
              />
            </Route>

            <Route
              path="/checkout"
              element={
                <>
                  <Header sticky />
                  <Checkout />
                </>
              }
            />

            <Route path="/add-restaurant" element={<Protected />}>
              <Route
                path="/add-restaurant"
                element={
                  <>
                    <Header sticky />
                    <AddRestuarant />
                  </>
                }
              />
            </Route>

            <Route path="/orders" element={<Protected />}>
              <Route
                path="/orders"
                element={
                  <>
                    <Header sticky />
                    <Orders />
                  </>
                }
              />
            </Route>

            <Route path="/order/:id" element={<Protected />}>
              <Route
                path="/order/:id"
                element={
                  <>
                    <Header sticky />
                    <OrderInfo />
                  </>
                }
              />
            </Route>

            {/* Restaruant admin routes */}
            <Route path="/admin/restaurant" element={<RestaurantAdmin />}>
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
                path="details"
                element={
                  <>
                    <AdminTopBar />
                    <FlexContainer>
                      <RestaurantSidebar />
                      <RestaurantDetails />
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

            <Route path="/admin" element={<AdminRoute />}>
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
