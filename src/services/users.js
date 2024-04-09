const API = 'https://65c67e3be5b94dfca2e19b59.mockapi.io/tourist-blog/users'

export const getUsers = async () => {
  const response = await fetch(API);
  const users = await response.json();
  return users;
}

export const getUser = async (id) => {
  const response = await fetch(`${API}/${id}`);
  const user = await response.json();
  return user;
}

export const postUser = async (userData) => {
  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const newUser = await response.json();
  return newUser;
}

