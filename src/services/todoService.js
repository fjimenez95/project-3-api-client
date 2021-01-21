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