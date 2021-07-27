import React, {useContext} from 'react';
import {CredentialContext} from '../../contexts/CredentialContext';
import CredentialsForm from './CredentialsForm';
import {Text} from 'react-native';

export default function Credentials() {
  const {token, save, decodeCredentials} = useContext(CredentialContext);
  return (
    <>
      <CredentialsForm
        onSubmit={values => save(values.clientId, values.clientSecret)}
        defaultValues={decodeCredentials}
      />
      <Text>{token}</Text>
    </>
  );
}
