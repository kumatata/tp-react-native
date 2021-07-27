import React, {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {Button as RNButton} from 'react-native';

function Button({title, onClick, variant = 'default', size = 20}) {
  const {theme} = useContext(ThemeContext);
  title = title.toString();
  const style = {textTransform: 'uppercase'};
  if (['icon', 'rounded'].includes(variant)) {
    style.borderRadius = '50%';
  }
  if (variant === 'icon') {
    style.width = size;
    style.height = size;
    style.maxWidth = size;
    style.maxHeight = size;
    style.minWidth = size;
    style.minHeight = size;
  }
  return <RNButton title={title} color={theme !== 'dark' ? 'white' : 'black'} onPress={onClick} style={style} />;
}

export default Button;
