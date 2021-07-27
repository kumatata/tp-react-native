import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import Button from './lib/Button';
import ButtonOldWay from './lib/ButtonOldWay';
import {Text, View} from 'react-native';

function Header() {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <View>
      <ButtonOldWay onClick={toggleTheme} title="Change Theme" />
      <Button onClick={toggleTheme} title="Change Theme 3" />
      <Text>Home</Text>
      <Text>Account</Text>
    </View>
  );
}

export default Header;
