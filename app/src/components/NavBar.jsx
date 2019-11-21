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
  width: 15%;
  justify-content: space-between;
  list-style: none;
`;

const NavBar = () => {
  return (
    <div>
      <NavDiv>
        <NavLinks href="/">Vegan Eats </NavLinks>
        <i class="fas fa-seedling"></i>
        <InnerNav>
          <div>
            <NavLinks href="/">Home</NavLinks>
          </div>
          <div>
            <NavLinks href="/signin/">Sign In</NavLinks>
          </div>
        </InnerNav>
      </NavDiv>
    </div>
  );
};

export default NavBar;
