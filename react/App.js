import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ReadyComponent from './components/ReadyComponent';
import CredentialsProvider from './contexts/CredentialContext';

export default function App() {
  return (
    <NavigationContainer>
      <CredentialsProvider>
        <ReadyComponent />
      </CredentialsProvider>
    </NavigationContainer>
  );
}
