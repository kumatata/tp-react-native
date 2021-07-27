import React from 'react';
import Button from './components/lib/Button';
import Page from './components/Page';
import Header from './components/Header';
import ShowItem from './components/Cart/ShowItem';
import Credentials from './components/Admin/Credentials';
import CredentialProvider from './contexts/CredentialContext';
import ListProvider from './contexts/ListContext';
import ThemeProvider from './contexts/ThemeContext';
import {View} from 'react-native';

function App() {
  return (
    <ThemeProvider>
      <View>
        <Button onClick={() => console.log('foo')} title="foo" />
        <Button onClick={event => console.log('hello')} title="hello" />
        <Button
          onClick={event => console.log(event)}
          title={true}
          variant="rounded"
        />
        <Button onClick={event => console.log('clicked')} title={10} />
        <CredentialProvider>
          <Header />
          <Credentials />
          <ListProvider>
            <Page />
            <Header />
            <ShowItem />
          </ListProvider>
        </CredentialProvider>
      </View>
    </ThemeProvider>
  );
}

export default App;
