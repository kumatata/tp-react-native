import React, {createContext, useCallback, useEffect, useState} from 'react';
import {getCodes, deleteCode, editCode, addCode} from './actions/codes';

export const ListContext = createContext();

export default function ListProvider({children}) {
  const [list, setList] = useState();

  useEffect(() => {
    //fetch
    //.then(data =>
    getCodes().then(codes => setList(codes));
  }, []);

  const deleteElement = useCallback(
    item => {
      deleteCode(item).then(() =>
        setList(list.filter(_item => _item._id !== item._id)),
      );
    },
    [list],
  );

  const editElement = useCallback(
    values => {
      editCode(values).then(item =>
        setList(list.map(it => (it._id === item._id ? item : it))),
      );
    },
    [list],
  );

  const addElement = useCallback(
    values => {
      addCode(values).then(item => setList([...list, item]));
    },
    [list],
  );

  const getItem = useCallback(
    id => {
      return list.find(it => it._id === id);
    },
    [list],
  );

  return (
    <ListContext.Provider
      value={{
        list: list ?? [],
        deleteElement,
        editElement,
        addElement,
        getItem,
        isReady: list !== undefined,
      }}>
      {children}
    </ListContext.Provider>
  );
}
