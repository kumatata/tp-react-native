import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, View, Alert, Text} from 'react-native';
import Button from './components/lib/Button';
import Page from './components/Page';
import Modal from './components/lib/Modal';
// import ButtonGroup from './components/ButtonGroup';
import ListProvider from './contexts/ListContext';

function App() {
  //   const [theme, setTheme] = useState('dark');
  const [modal, setModal] = useState(false);
  const [todoItems, setTodoItems] = useState([{text: "Buy groceries", completed: true}, {text: "Make blogpost", completed: false}]);


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
      <StatusBar barStyle={"light-content"} backgroundColor={"#212121"} />
      <View style={{padding: 16}}>
        {/* <ThemeProvider> */}
        {/* <ButtonGroup /> */}
          <ListProvider>
            <Page />
          </ListProvider>
        {/* </ThemeProvider> */}
      </View>
    </SafeAreaView>
  );
}

export default App;
