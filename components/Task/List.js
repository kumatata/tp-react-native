import React, {useContext, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ListContext} from '../../contexts/ListContext';
import ListItem from './ListItem';
import AddEditItem from './AddEditItem';

export default function List() {
  const {list} = useContext(ListContext);
  const [selectedItem, setSelectedItem] = useState();

  const handleEditItem = item => setSelectedItem(item);

  return (
    <View>
      <AddEditItem selectedItem={selectedItem} />
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem item={item} onEdit={handleEditItem} />
        )}
      />
    </View>
  );
}
