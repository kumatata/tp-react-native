import React, {useContext, useMemo} from 'react';
import {ListContext} from '../../contexts/ListContext';
import {View, Text, StyleSheet, Button} from 'react-native';
export default function ListItem({item, onEdit}) {
  const {deleteItem} = useContext(ListContext);

  return useMemo(
    () => (
      <View style={styles.fixToText}>
        <Text>{item.name}</Text>
        <View style={styles.btn}>
          <Button
            title="delete"
            onPress={() => deleteItem(item)}
            style={styles.btnTop}
            color="red"
          />
          <Button title="edit" onPress={() => onEdit(item)} />
        </View>
      </View>
    ),
    [item, onEdit, deleteItem],
  );
}
const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
