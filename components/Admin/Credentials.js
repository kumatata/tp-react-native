import React, {useContext} from 'react';
import {CredentialContext} from '../../contexts/CredentialContext';
import CredentialsForm from './CredentialsForm';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';

export default function Credentials() {
  const {token, login, logout} = useContext(CredentialContext);
  return (
    <>
      {!token && (
        <>
          <CredentialsForm
            onSubmit={values => login(values.username, values.password)}
          />
          <Text>{token}</Text>
        </>
      )}
      {token && (
        <Button mode="contained" onPress={logout}>
          Logout
        </Button>
      )}
    </>
  );
}
