import React, {useState} from 'react';
import Button from '../lib/Button';
import {View, TextInput} from 'react-native';

export default function Form({onSubmit, defaultValues}) {
  const [values, setValues] = useState(
    defaultValues || {
      name: '',
    },
  );

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <View>
      <TextInput
        style={{backgroundColor: 'lightgrey'}}
        onChangeText={value => handleChange({target: {value, name: 'name'}})}
        value={values.name}
        placeholder="type new item here"
      />

      <Button title="Submit" onClick={handleSubmit} />
    </View>
  );
}
