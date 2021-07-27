import React, {useContext, useMemo} from 'react';
import {ListContext} from '../../contexts/ListContext';
import {Text} from 'react-native';

export default function ShowItem() {
  const id = 1;
  const {getItem, isReady} = useContext(ListContext);

  const item = useMemo(() => getItem(parseInt(id)), [id, isReady]);
  console.log(item);
  return (
    <Text>
      {!isReady && 'Loading ....'}
      {isReady && `${id} ${item?.name}`}
    </Text>
  );
}
