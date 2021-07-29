import React, {useState} from 'react';
import Button from '../lib/Button';
import {TouchableHighlight, Text, View, TextInput} from 'react-native';
const defaultV = {
  name: ''
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
  console.log("coumba la meilleure",name)
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <View>
      <TextInput onChangeText={handleChange('name')} value={values.name} />
      <TouchableHighlight onClick={e => _onSubmit()}>
        <Text>Submit</Text>
      </TouchableHighlight>
      <Button title="Submit Form" onClick={_onSubmit} />
    </View>
  );
}
