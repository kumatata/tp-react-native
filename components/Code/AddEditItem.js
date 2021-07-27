import React, {useContext, useState, useEffect} from 'react';
import {ListContext} from '../../contexts/ListContext';
import {Button, Portal, Dialog} from 'react-native-paper';
import Form from './Form';

export default function AddEditItem({selectedItem = false}) {
  const {editElement, addElement} = useContext(ListContext);

  const [modal, setModal] = useState(selectedItem);

  useEffect(() => setModal(selectedItem), [selectedItem]);

  const handleSubmit = values => {
    if (modal === true) addElement(values);
    else editElement(values);
    setModal(false);
  };

  return (
    <>
      <Button onPress={() => setModal(true)}>Add Item</Button>
      <Portal>
        <Dialog visible={Boolean(modal)} onDismiss={() => setModal(false)}>
          <Dialog.Title>Add product</Dialog.Title>
          <Dialog.Content>
            <Form onSubmit={handleSubmit} item={modal !== true && modal} />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </>
  );
}
