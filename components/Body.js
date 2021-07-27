import React, {useEffect, useState} from 'react';
import List from './Cart/List';
import Button from './lib/Button';
import Modal from './lib/Modal';
import {View, Text} from 'react-native';

const elem = [];
const item = {deleteable: false};

function Body() {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <View>
      <Button title="Body button" />
      <Button onClick={() => setVisible(!visible)} title="Display More" />
      {visible && <Text>Visible content</Text>}
      {!visible && <Text>Hidden content</Text>}
      <Button onClick={() => setModal(!modal)} title="Open modal" />
      <Modal title="Ma modal" open={modal} onClose={() => setModal(false)}>
        <Text>Ma description</Text>
        <Text>Google</Text>
        <Button title="test" />
      </Modal>
      <List />
    </View>
  );
}

export default Body;
