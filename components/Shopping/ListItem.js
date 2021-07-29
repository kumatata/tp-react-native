import React, {useContext, useMemo} from 'react';
import {ListContext} from '../../contexts/ListContext';
import Button from '../lib/Button';
import {View, Text} from 'react-native';
export default function ListItem({item}) {
  const {deleteItem} = useContext(ListContext);
  const {editItem} = useContext(ListContext);


  return useMemo(
    () => (
      <View>
        <Text>
          {item.name}
        </Text>
        <Button title="delete" onClick={() => deleteItem(item)} />
        <Button title="edit" onClick={() => editItem(item)} />
      </View>
    ),
    [item],
  );
}
