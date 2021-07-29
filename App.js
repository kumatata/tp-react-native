import React from 'react';
import ShoppingListScreen from './screen/ShoppingListScreen';
import TaskListScreen from './screen/TaskListScreen';

import HomeScreen from './screen/HomeScreen';
import ListProvider from './contexts/ListContext';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <ListProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{title: 'Shopping List'}}
            name="ShoppingListScreen"
            component={ShoppingListScreen}
          />
          <Stack.Screen
            options={{title: 'Task List'}}
            name="TaskListScreen"
            component={TaskListScreen}
          />
        </Stack.Navigator>
      </ListProvider>
    </NavigationContainer>
  );
}

export default App;
