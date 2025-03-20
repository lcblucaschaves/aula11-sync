// https://rickandmortyapi.com/api/character/1


function random(max: number) {
    return Math.floor(Math.random() * max) + 1;
}

const APIBASE = 'https://rickandmortyapi.com/api';

interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

async function fetchCharacterData() {
    try {
        const response = await fetch(`${APIBASE}/character/${random(20)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data: Character = await response.json();

        const nameElement = document.querySelector('#character-name');
        const statusElement = document.querySelector('#character-status');
        const speciesElement = document.querySelector('#character-species')
        const imageElement = document.querySelector('#character-image') as HTMLImageElement;

        if (nameElement) {
            nameElement.textContent = data.name;
        }

        if (statusElement) {
            statusElement.textContent = `Status: ${data.status}`;
        }

        if (speciesElement) {
            speciesElement.textContent = `Species: ${data.species}`;
        }

        if (imageElement) {
            imageElement.src = data.image;
            imageElement.alt = data.name;
        }


    } catch (error) {
        const errorElement = document.querySelector('#error-message');

        if (errorElement && error instanceof Error) {
            errorElement.textContent = `Failed to fetch data: ${error.message}`;
        }
        console.log('Deu erro');
    }
}

document.querySelector('#random-character')?.addEventListener('click', fetchCharacterData);

fetchCharacterData();