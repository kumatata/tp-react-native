import React from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {Button as RNButton} from 'react-native';

function Button({title, variant, theme, onClick}) {
  const style = {};
  if (variant === 'rounded') style.borderRadius = '50%';
  return (
    <ThemeContext.Consumer>
      {({theme}) => {
        style.color = theme === 'dark' ? 'white' : 'black';
        style.backgroundColor = theme === 'dark' ? 'black' : 'white';
        return (
          <RNButton
            onPress={onClick}
            title={title.toString()}
            color={theme === 'dark' ? 'black' : 'white'}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Button;
