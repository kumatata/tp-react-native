import React, {useContext} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {CredentialContext} from '../contexts/CredentialContext';
import ListProvider from '../contexts/ListContext';
import {View, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Credentials from './Admin/Credentials';
import List from './Code/List';

const Tab = createMaterialBottomTabNavigator();

export default function ReadyComponent() {
  const {token} = useContext(CredentialContext);
  return (
    <>
      {token === undefined && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>native4IW3</Text>
          <ActivityIndicator />
        </View>
      )}
      {token !== undefined && (
        <Tab.Navigator>
          <Tab.Screen name="Credentials" component={Credentials} />
          <Tab.Screen
            name="Code"
            component={() => (
              <ListProvider>
                <List />
              </ListProvider>
            )}
          />
        </Tab.Navigator>
      )}
    </>
  );
}
