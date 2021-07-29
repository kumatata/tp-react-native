import React, {useState} from 'react';
import Button from '../lib/Button';
import {TouchableHighlight, Text, View, TextInput} from 'react-native';
const defaultV = {
  name: '',
  quantity: 0,
  unitPrice: 0,
};

export default function Form({onSubmit, item}) {
  const [values, setValues] = useState(item || defaultV);

  const _onSubmit = () => {
    onSubmit({...values});
  };

  // Handle Change génère une fonction listener
  // qui se souviendra de la valeur de la variable name par le phénomène de Closure
  // Ex: handleChange('foo') génère une fonction équivalente à :
  //  (value) => setValues({...values, 'foo': value})

  const handleChange = name => value => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <View>
      <TextInput onChangeText={handleChange('name')} value={values.name} />
      <TextInput
        onChangeText={handleChange('quantity')}
        value={values.quantity}
      />
      <TextInput
        onChangeText={handleChange('unitPrice')}
        value={values.unitPrice}
      />
      <TouchableHighlight onClick={e => _onSubmit()}>
        <Text>Submit</Text>
      </TouchableHighlight>
      <Button title="Submit Form" onClick={_onSubmit} />
    </View>
  );
}
