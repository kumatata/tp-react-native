import React, {useContext} from 'react';
import {ListContext} from '../../contexts/ListContext';
import Button from '../lib/Button';
import {View, Text} from 'react-native';

export default function ListItem({item, onEdit}) {
  const {deleteElement} = useContext(ListContext);

  return (
    <View>
      <Text>
        {item.name} {item.unitPrice} {item.quantity}
      </Text>
      <Button title="Delete" onClick={() => deleteElement(item)} />
      <Button title="Edit" onClick={() => onEdit(item)} />
    </View>
  );
}
