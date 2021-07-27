import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {TouchableHighlight, Text, View} from 'react-native';
const defaultV = {
  _id: '',
  message: 0,
  description: 0,
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
      <TextInput
        label="Code"
        onChangeText={handleChange('_id')}
        value={values._id}
      />
      <TextInput
        label="Message"
        onChangeText={handleChange('message')}
        value={values.message}
      />
      <TextInput
        label="description"
        onChangeText={handleChange('description')}
        value={values.description}
      />
      <TouchableHighlight onClick={e => _onSubmit()}>
        <Text>Submit</Text>
      </TouchableHighlight>
      <Button onPress={_onSubmit}>Submit Form</Button>
    </View>
  );
}
