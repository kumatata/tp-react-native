import React, {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {Button as RNButton} from 'react-native';

function Button({title, variant, theme: _, onClick}) {
  const {theme} = useContext(ThemeContext);

  const style = {};
  if (variant === 'rounded') style.borderRadius = '50%';
  style.color = theme === 'dark' ? 'white' : 'black';

  return (
    <RNButton
      onPress={onClick}
      title={title.toString()}
      color={theme === 'dark' ? 'black' : 'white'}
    />
  );
}

export default Button;
