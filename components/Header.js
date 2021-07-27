import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import ButtonOldWay from './lib/ButtonOldWay';
import {View, Text} from 'react-native';

function Header() {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <View>
      <Text>Website</Text>
      <ButtonOldWay title="Toggle theme" onClick={toggleTheme} />
      <Text>Home</Text>
      <Text>Admin</Text>
    </View>
  );
}

export default Header;
