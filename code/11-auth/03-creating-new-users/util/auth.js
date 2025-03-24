import axios from 'axios';

const API_KEY = 'AIzaSyDCYasArcOwcALFhIj2szug5aD2PgUQu1E'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}
