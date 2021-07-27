import React, {useState} from 'react';
import Button from '../lib/Button';
import {View, TextInput} from 'react-native';

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
        onChangeText={value =>
          handleChange({target: {value, name: 'clientId'}})
        }
        value={values.clientId}
      />
      <TextInput
        onChangeText={value =>
          handleChange({target: {value, name: 'clientSecret'}})
        }
        value={values.clientSecret}
      />
      <Button title="Submit Form" onClick={_onSubmit} />
    </View>
  );
}
