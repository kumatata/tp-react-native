import React, {useContext,useState, useEffect} from 'react';
import {ListContext} from '../../contexts/ListContext';
import Button from '../lib/Button';
import {View, Text} from 'react-native';
import Modal from "../lib/Modal";
import Form from "./Form";

export default function ListItem({item, selectedItem = false}) {
  const {deleteItem, editItem} = useContext(ListContext);
  const [modal, setModal] = useState(selectedItem);
  console.log("coumba la meilleure")

  useEffect(() => setModal(selectedItem), [selectedItem]);

  const handleSubmit = (values) => {
    if (modal === true) editItem(values);
    setModal(false);
  };

  return (
    <View>
      <Text>
        {item.name}
      </Text>
      <Button title="Delete" onClick={() => deleteItem(item)} />
      <Button title="Edit" onClick={() => setModal(true)} />
      <Modal
        title="Edit Item"
        open={Boolean(modal)}
        onClose={() => setModal(false)}
      >
        <Form onSubmit={handleSubmit} item={modal !== true && modal} />
      </Modal>
    </View>
  );
}
