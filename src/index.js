const button = document.createElement('button');
button.innerText = 'Click Me';

button.onclick = () => {
    // gets the  module image_viewer (with its dependencies) from server
    // This is async. so it returns a promise
    System.import('./image_viewer').then(module => module.default());
}

document.body.appendChild(button);