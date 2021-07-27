import React, {createContext, useEffect, useState} from 'react';
import {login as flogin} from './actions/security';
import {login as alogin} from './actions/security-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CredentialContext = createContext();
//CredentialContext.Provider;
//   Permet de diffuser la data du context dans tous les composants enfants de celui-ci

//CredentialContext.Consumer;
//    Permet de récupérer la data du context associé et définit dans le provider le plus proche

export default function CredentialProvider({children}) {
  const [token, setToken] = useState();

  useEffect(
    () =>
      setTimeout(
        () => AsyncStorage.getItem('jwt_token').then(token => setToken(token)),
        1,
      ),
    [],
  );

  const login = (username, password) => {
    flogin(username, password).then(token => {
      AsyncStorage.setItem('jwt_token', token).then(() => setToken(token));
    });
  };

  const logout = () =>
    AsyncStorage.removeItem('jwt_token').then(() => setToken(null));

  return (
    <CredentialContext.Provider value={{token, login, logout}}>
      {children}
    </CredentialContext.Provider>
  );
}
