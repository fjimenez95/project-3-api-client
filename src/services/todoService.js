// const getTodos = () => fetch("http://localhost:3002/todos").then(res => res.json).catch((error) => console.log(error));

export function getTodos() {
    return fetch('http://localhost:3002/todos')
    .then(res => res.json)
    .catch(err => console.log(err))
}