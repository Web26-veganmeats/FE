import React from "react";

import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  width: 86%;
  justify-content: space-between;
  text-decoration: none;
  background-color: #91a799;
  color: #28590c;
  padding: 2% 7% 2% 7%;
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: #fbfceb;
  font-size: 1.25rem;
`;

const InnerNav = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  list-style: none;
`;

const NavBar = () => {
  return (
    <div>
      <NavDiv>
        <NavLinks href="/restaurantlist">Vegan Eats </NavLinks>
        <InnerNav>
          <div>
            <NavLinks href="/restaurantlist">Home</NavLinks>
          </div>
          <div>
            <NavLinks href="/">Sign In</NavLinks>
          </div>
          <div>
            <NavLinks href="/">Sign Out</NavLinks>
          </div>
        </InnerNav>
      </NavDiv>
    </div>
  );
};

export default NavBar;
