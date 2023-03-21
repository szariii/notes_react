import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <button>Notes</button>
      </Link>
      <h1>FreeNote</h1>
      <Link to="/create">
        <button>Create Notes</button>
      </Link>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  min-height: 5rem;
  background-color: #3565b8;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid black;
  margin-bottom: 2rem;
`;

export default Nav;
