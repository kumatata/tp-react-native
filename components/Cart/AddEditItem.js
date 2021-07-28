import React, {useContext, useEffect, useState} from 'react';
import {ListContext} from '../../contexts/ListContext';
import Modal from '../lib/Modal';
import Button from '../lib/Button';
import Form from './Form';
import {View} from 'react-native';
export default function AddEditItem({selectedItem = false}) {
  const {editItem, addItem} = useContext(ListContext);
  const [modal, setModal] = useState(selectedItem);

  useEffect(() => {
    setModal(selectedItem);
  }, [selectedItem]);

  const handleSubmit = values => {
    if (modal !== true) {
      editItem(values);
    } else addItem({id: Date.now(), ...values});
    setModal(false);
  };

  return (
    <View>
      <Button title="add" onClick={() => setModal(true)} />
      <Modal title="Add new item" open={modal} onClose={() => setModal(false)}>
        <Form onSubmit={handleSubmit} defaultValues={modal !== true && modal} />
      </Modal>
    </View>
  );
}
