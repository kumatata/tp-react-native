import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, View, Alert, Text} from 'react-native';
import Button from './components/lib/Button';
import Page from './components/Page';
import Modal from './components/lib/Modal';
// import ButtonGroup from './components/ButtonGroup';
import CredentialsProvider from './contexts/CredentialsContext';
import ListProvider from './contexts/ListContext';
let mount = false;

function App() {
  //   const [theme, setTheme] = useState('dark');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log('did mount');
    return () => {
      console.log('will unmount');
    };
  }, []);

  //   useEffect(() => {
  //     console.log('did update ' + theme);

  //     return () => {
  //       console.log('will update ' + theme);
  //     };
  //   }, [theme]);

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        {/* <ThemeProvider> */}
        {/* <ButtonGroup /> */}
        <CredentialsProvider>
          <ListProvider>
            <Page />
          </ListProvider>
        </CredentialsProvider>

        <Button onClick={() => setModal(true)} title="open modal" />
        {modal && (
          <Modal
            title={'Mon titre'}
            open={true}
            onClose={() => Alert.prompt('Closing modal') && setModal(false)}>
            <Text>Ma description</Text>
            <Text>Google</Text>
          </Modal>
        )}
        {/* </ThemeProvider> */}
      </View>
    </SafeAreaView>
  );
}

export default App;
