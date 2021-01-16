import { setToken, getUserFromToken, removeToken } from './tokenService';

// DECLARE  A VARIABLE FOR URL TO OUR API
const BASE_URL = 'http://localhost:3002/api/users';


// DEFINE FUNCTIONS FOR MAKING AJAX REQUESTS
function signup(user) {
   return fetch(BASE_URL + '/signup', {
       method: 'POST',
       headers: {
           'Content-Type': 'Application/json',
       },
       body: JSON.stringify(user), 
   })
   .then(response => {
        if(response.ok) return response.json();
        // Error handling scenario
        throw new Error('Email already taken!');
   })
   .then(data => setToken(data.token))
}

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(credentials), 
    })
    .then(response => {
         if(response.ok) return response.json();
         // Error handling scenario
         throw new Error('Bad credentials!');
    })
    .then(data => setToken(data.token))
 }

function logout() {
    removeToken();
}

function getUser() {
   return getUserFromToken();
}

// EXPORT OUR FUNCTIONS

export {
    signup,
    login,
    logout,
    getUser
};