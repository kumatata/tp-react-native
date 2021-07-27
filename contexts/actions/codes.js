export function getCodes() {
  return fetch('http://localhost:3000/codes').then(res => res.json());
}

export function deleteCode(item) {
  return fetch('http://localhost:3000/codes/' + item._id, {
    method: 'DELETE',
  }).then(res => {
    if (res.status === 204) return true;
    throw new Error(res.status);
  });
}

export function editCode(item) {
  return fetch('http://localhost:3000/codes/' + item._id, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(item),
  }).then(res => res.json());
}

export function addCode(item) {
  return fetch('http://localhost:3000/codes', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(item),
  }).then(res => res.json());
}
