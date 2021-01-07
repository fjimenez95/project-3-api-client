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
   .then(data => console.log(data))
}

function login(credentials) {

}

function logout() {

}

function getUser() {
   
}

// EXPORT OUR FUNCTIONS

export {
    signup,
    login,
    logout,
    getUser
};