import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {View} from 'react-native';

const defaultV = {
  clientId: '',
  clientSecret: '',
};

export default function CredentialsForm({onSubmit, defaultValues}) {
  const [values, setValues] = useState(defaultValues || defaultV);

  const _onSubmit = () => {
    onSubmit({...values});
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <View>
      <TextInput
      label="username"
        onChangeText={value =>
          handleChange({target: {value, name: 'username'}})
        }
        value={values.username}
      />
      <TextInput
      label="password"
        onChangeText={value =>
          handleChange({target: {value, name: 'password'}})
        }
        value={values.password}
      />
      <Button mode="contained" onPress={_onSubmit}>
        Submit Form
      </Button>
    </View>
  );
}
