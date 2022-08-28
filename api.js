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
