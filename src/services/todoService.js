// const getTodos = () => fetch("http://localhost:3002/todos").then(res => res.json).catch((error) => console.log(error));
import TodoForm from '../components/TodoForm';
import { getToken } from './tokenService';


export function getTodos() {
    return fetch('http://localhost:3002/todos', {
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
  return fetch('http://localhost:3002/todos/create', {
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
  return fetch(`http://localhost:3002/todos/${id}`, {
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
  return fetch(`http://localhost:3002/todos/${id}`, {
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
  return fetch(`http://localhost:3002/todos/delete/${id}?_method=DELETE`, {
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