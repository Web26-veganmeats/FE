import React from "react";

import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  width: 86%;
  justify-content: space-between;
  text-decoration: none;
  background-color: #29590d;
  color: #a3e1d9;
  padding: 2% 7% 2% 7%;
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: #a3e1d9;
  font-size: 1.25rem;
`;

const InnerNav = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-between;
  list-style: none;
`;

<<<<<<< HEAD
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
=======
>>>>>>> 363e50da6c61bf6bb68bcb3210d625cc698b942f
