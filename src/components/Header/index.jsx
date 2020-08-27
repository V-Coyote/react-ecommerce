import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Container, Item } from './styles';

function Header({ user }) {
  // const [isLogged, setIsLogged] = useState(false);

  // console.log(user);
  return (
    <>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <Item>
            <Link to="/shop">SHOP</Link>
          </Item>
          <Item>
            <Link to="/contact">CONTACT</Link>
          </Item>

          {user ? (
            <Item onClick={() => auth.signOut()}>SIGN OUT</Item>
          ) : (
            <Item>
              <Link to="/signin">SIGN IN</Link>
            </Item>
          )}
        </div>
      </Container>
    </>
  );
}

export default Header;