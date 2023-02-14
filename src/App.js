import Category from "./Components/Category";
// import Home from "./Pages/Home";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { Search } from "./Components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
// import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Yummy</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};


const Logo = styled.div`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: "Gentium Book Plus", serif;
`;

const Nav = styled.div`
padding: 1rem 1rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg {
  font-size: 2rem;
}
`;

export default App;