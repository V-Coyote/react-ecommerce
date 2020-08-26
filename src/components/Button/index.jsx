import React from 'react';

import { ButtonStyle } from './styles';

function Button({
  labelButton,
  typeButton,
  colorButton,
  signIn,
  isGoogleSignIn,
}) {
  return (
    <>
      {isGoogleSignIn ? (
        <ButtonStyle
          type={typeButton}
          color={colorButton}
          onClick={() => signIn()}
        >
          {labelButton}
        </ButtonStyle>
      ) : (
        <ButtonStyle type={typeButton} color={colorButton}>
          {labelButton}
        </ButtonStyle>
      )}
    </>
  );
}

export default Button;
