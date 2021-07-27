import React from 'react';
import {Button as RNButton} from 'react-native';
function Button({title, onClick, variant = 'default', size = 20, theme: _}) {
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

  return (
    <>
      {({theme}) => {
        return (
          <RNButton
            onPress={onClick}
            style={{
              ...style,
            }}
            color={theme !== 'dark' ? 'white' : 'black'}
            title={title}
          />
        );
      }}
    </>
  );
}

export default Button;
