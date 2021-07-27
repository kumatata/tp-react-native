export function login(username, password) {
  return fetch('http://localhost:3000/login', {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => res.json())
  .then(data => data.token);
}
