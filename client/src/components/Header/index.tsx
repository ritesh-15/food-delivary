import {
  DropItems,
  HeaderContainer,
  Nav,
  NavBrand,
  NavItems,
  TotalCartItems,
} from "./Header.style";
import Container from "../../styles/Container";
import Flex from "../../styles/Flex";
import {
  PersonOutline,
  ShoppingBag,
  Search,
  AccountCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useFetchLoading, useUser } from "../../hooks";
import { logOutApi } from "../../api/authenticationApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setOpen } from "../../features/cart-sidebar/cartSidebarSlice";
import { Cart } from "..";

interface HeaderProps {
  sticky?: boolean;
}

export default function Header(props: HeaderProps) {
  const { user, removeUser } = useUser();
  const { setIsLoading } = useFetchLoading();
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const isCartSidebarOpen = useSelector(
    (state: RootState) => state.cartSidebar.open
  );

  // logout user
  const logOutUser = async () => {
    setIsLoading(true);
    try {
      await logOutApi();
      setIsLoading(false);
      removeUser();
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isCartSidebarOpen && <Cart />}

      <HeaderContainer sticky={props.sticky}>
        <Nav>
          <Container>
            <Flex>
              <NavBrand>
                <Link to="/">
                  <Flex>
                    <h1>Foodies</h1>
                  </Flex>
                </Link>
              </NavBrand>
              <NavItems>
                <ul>
                  <Flex>
                    <li>
                      <Flex>
                        <Search />
                        <span>Search</span>
                      </Flex>
                    </li>
                    {!user && (
                      <li>
                        <Link to="/login">
                          <Flex>
                            <PersonOutline />
                            <span>Sign In</span>
                          </Flex>
                        </Link>
                      </li>
                    )}

                    <li onClick={() => dispatch(setOpen(true))}>
                      <Flex>
                        <ShoppingBag />
                        {products.length !== 0 && (
                          <TotalCartItems>{products.length}</TotalCartItems>
                        )}
                        <span>Cart</span>
                      </Flex>
                    </li>
                    {user && (
                      <li>
                        <Flex>
                          <AccountCircle />
                          <span>{user.name}</span>
                        </Flex>
                        <DropItems>
                          <Link to="/application">
                            <li>My application</li>
                          </Link>
                          <Link to="/account">
                            <li>Profile</li>
                          </Link>
                          <Link to="/orders">
                            <li>My orders</li>
                          </Link>
                          <li onClick={logOutUser}>Log out</li>
                        </DropItems>
                      </li>
                    )}
                  </Flex>
                </ul>
              </NavItems>
            </Flex>
          </Container>
        </Nav>
      </HeaderContainer>
    </>
  );
}
