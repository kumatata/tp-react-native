import React, {createContext, useMemo, useState} from 'react';
import base64 from 'react-native-base64';
export const CredentialContext = createContext();

//CredentialContext.Provider;
//   Permet de diffuser la data du context dans tous les composants enfants de celui-ci

//CredentialContext.Consumer;
//    Permet de récupérer la data du context associé et définit dans le provider le plus proche

export default function CredentialProvider({children}) {
  const [credential, setCredential] = useState(
    JSON.parse(/*localStorage.getItem('credential') ||*/ 'null'),
  );

  const save = (clientId, clientSecret) => {
    localStorage.setItem(
      'credential',
      JSON.stringify({
        clientId,
        clientSecret,
      }),
    );
    setCredential({
      clientId,
      clientSecret,
    });
  };

  // btoa = base64(username:password)
  const token = useMemo(
    () =>
      credential &&
      base64.encode(`${credential.clientId}:${credential.clientSecret}`),
    [credential],
  );

  return (
    <CredentialContext.Provider
      value={{decodedCredential: credential, token, save}}>
      {children}
    </CredentialContext.Provider>
  );
}
