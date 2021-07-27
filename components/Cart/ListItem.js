import React, {useContext, useMemo} from 'react';
import {ListContext} from '../../contexts/ListContext';
import Button from '../lib/Button';
import {View, Text} from 'react-native';
export default function ListItem({item, onEdit}) {
  const {deleteItem} = useContext(ListContext);

  return useMemo(
    () => (
      <View>
        <Text>
          {item.name} {item.unitPrice} {item.quantity}
        </Text>
        <Button title="delete" onClick={() => deleteItem(item)} />
        <Button title="edit" onClick={() => onEdit(item)} />
      </View>
    ),
    [item],
  );
}
