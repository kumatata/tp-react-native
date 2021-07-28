import * as React from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        height: 130,
      }}>
      <Button
        title="Shopping List"
        onPress={() => navigation.navigate('ShoppingListScreen')}
      />
      <Button
        title="Task List"
        onPress={() => navigation.navigate('TaskListScreen')}
      />
    </View>
  );
}
export default HomeScreen;
