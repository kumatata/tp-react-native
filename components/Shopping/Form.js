import React, {useState} from 'react';
import Button from '../lib/Button';
import {View, TextInput} from 'react-native';

export default function Form({onSubmit, defaultValues}) {
  const [values, setValues] = useState(
    defaultValues || {
      name: '',
      unitPrice: 0,
      quantity: 0,
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
        onChangeText={value => handleChange({target: {value, name: 'name'}})}
        value={values.name}
      />
      <TextInput
        onChangeText={value =>
          handleChange({target: {value, name: 'unitPrice'}})
        }
        value={values.unitPrice}
      />
      <TextInput
        onChangeText={value =>
          handleChange({target: {value, name: 'quantity'}})
        }
        value={values.quantity}
      />
      <Button title="Submit" onClick={handleSubmit} />
    </View>
  );
}
