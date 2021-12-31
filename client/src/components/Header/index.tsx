import { HeaderContainer, Nav, NavBrand, NavItems } from "./Header.style";
import Container from "../../styles/Container";
import Flex from "../../styles/Flex";
import { PersonOutline, ShoppingBag, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Container>
          <Flex>
            <NavBrand>
              <Link to="/">
                <Flex>
                  {/* <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  /> */}
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
                  <li>
                    <Link to="/login">
                      <Flex>
                        <PersonOutline />
                        <span>Sign In</span>
                      </Flex>
                    </Link>
                  </li>
                  <li>
                    <Flex>
                      <ShoppingBag />
                      <span>Cart</span>
                    </Flex>
                  </li>
                </Flex>
              </ul>
            </NavItems>
          </Flex>
        </Container>
      </Nav>
    </HeaderContainer>
  );
}
