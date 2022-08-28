fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(image => helloImage(image));

    const helloImage = images =>{
        const container = document.getElementById('container');
        for(const image of images){
            const div = document.createElement('tr');
            div.innerHTML = `            
                    <td>${image.id}</td>
                    <td>${image.title}</td>
                    <td><img height="30px" width="30px" src="${image.url}" alt="${image.title}"></td>
            `
            container.appendChild(div);
        }
    }

    fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(todo => helloTodo(todo));

    const helloTodo = todos =>{
        console.log(todo);
        const container = document.getElementById('todo');
        for(const todo of todos){
            const table = document.createElement('tr');
            table.innerHTML = `            
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td class="text-center">${todo.completed}</td>
            `
            container.appendChild(table);
    }
}