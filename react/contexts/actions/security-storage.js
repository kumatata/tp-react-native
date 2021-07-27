import AsyncStorage from '@react-native-async-storage/async-storage';

export function login(username, password) {
  return AsyncStorage.setItem(
    'credentials',
    JSON.stringify({
      username,
      password,
    }),
  ).then(() => Math.random());
}
