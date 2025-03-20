function fetchPromise() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

fetchPromise();

async function fetchAsyncAwait() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    console.log(json);

    async function fetchHTML() {
        const response = await fetch('https://www.ufabc.edu.br/');
        const text = await response.text();

        console.log(text.substring(0, 500));
    }

    fetchHTML();
}

fetchAsyncAwait();