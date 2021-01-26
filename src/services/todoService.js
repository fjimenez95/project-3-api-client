// const getTodos = () => fetch("http://localhost:3002/todos").then(res => res.json).catch((error) => console.log(error));
import TodoForm from '../components/TodoForm';
import { getToken } from './tokenService';


export function getTodos() {
    return fetch('https://todos4teams.herokuapp.com/todos', {
    method: 'GET',
    headers: 
        {
          'Authorization': 'Bearer ' + getToken(),
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function createTodo(todo) {
  return fetch('https://todos4teams.herokuapp.com/todos/create', {
    method: 'POST',
    headers: 
        {
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + getToken(),
        },
    body: JSON.stringify(todo),
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function getTodo(id) {
  return fetch(`https://todos4teams.herokuapp.com/todos/${id}`, {
    method: 'GET',
    headers: 
        {
          'Authorization': 'Bearer ' + getToken(),
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function updateTodo(todo, id) {
  return fetch(`https://todos4teams.herokuapp.com/todos/${id}`, {
    method: 'POST',
    headers: 
        {
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + getToken(),
        },
    body: JSON.stringify(todo),
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export function deleteTodo(id) {
  return fetch(`https://todos4teams.herokuapp.com/todos/delete/${id}?_method=DELETE`, {
    method: 'POST',
    headers: 
        {
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + getToken(),
        },
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}