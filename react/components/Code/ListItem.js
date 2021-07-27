import React, {useContext} from 'react';
import {ListContext} from '../../contexts/ListContext';
import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';

export default function ListItem({item, onEdit}) {
  const {deleteElement} = useContext(ListContext);

  return (
    <View>
      <Text>
        {item._id} {item.message}
      </Text>
      <Button  onPress={() => deleteElement(item)} >Delete</Button>
      <Button  onPress={() => onEdit(item)} >Edit</Button>
    </View>
  );
}
