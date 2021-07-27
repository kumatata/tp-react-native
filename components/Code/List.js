import React, {useContext, useState} from 'react';
import {ListContext} from '../../contexts/ListContext';
import AddEditItem from './AddEditItem';
import ListItem from './ListItem';
import CreateTransactionButton from '../CreateTransactionButton';
import {FlatList} from 'react-native';

export default function List() {
  const {list} = useContext(ListContext);

  const [selectedItem, setSelectedItem] = useState(false);

  const onEdit = item => {
    setSelectedItem(item);
  };

  return (
    <>
      <AddEditItem selectedItem={selectedItem} />
      <FlatList
        data={list}
        keyExtractor={item => item._id}
        renderItem={({item}) => <ListItem item={item} onEdit={onEdit} />}
      />
      <CreateTransactionButton />
    </>
  );
}
