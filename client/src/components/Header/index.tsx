import {
  DropItems,
  HeaderContainer,
  Nav,
  NavBrand,
  NavItems,
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
import { useUser } from "../../hooks";

interface HeaderProps {
  sticky?: boolean;
}

export default function Header(props: HeaderProps) {
  const { user } = useUser();

  return (
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

                  <li>
                    <Flex>
                      <ShoppingBag />
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
                        <li>Log out</li>
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
  );
}
