import React, {createContext, useCallback, useEffect, useState} from 'react';
import { AsyncStorage } from 'react-native';

const defaultList = [];

export const ListContext = createContext();

export default function ListProvider({children}) {
  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => setList(defaultList) || setReady(true), []);

  const deleteItem = useCallback(
    item => setList(list.filter(it => it !== item)),
    [list],
  );
  const completeItem = useCallback(
    item => setList(list.filter(it => it !== item)),
    [list],
  );
  const editItem = useCallback(
    item => setList(list.map(it => (it.id === item.id ? item : it))),
    [list],
  );
  const addItem = useCallback(item => setList([...list, item]), [list]);

  const getItem = useCallback(id => list.find(it => it.id === id), [list]);

  return (
    <ListContext.Provider
      value={{
        list,
        deleteItem,
        editItem,
        addItem,
        getItem,
        isReady: ready,
      }}>
      {children}
    </ListContext.Provider>
  );
}
