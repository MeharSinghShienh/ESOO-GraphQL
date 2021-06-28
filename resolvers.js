const fetch = require('node-fetch');
const API_URL= 'http://localhost:3000/api/v1';

const Query = {
    reptile : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/reptiles/${id}`);
        const response = await fetch (`${API_URL}/reptiles/${id}`);
        const result = await response.json();

        return result;
    },
    bird : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/birds/${id}`);
        const response = await fetch (`${API_URL}/birds/${id}`);
        const result = await response.json();

        return result;
    },
    mammal : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/mammals/${id}`);
        const response = await fetch (`${API_URL}/mammals/${id}`);
        const result = await response.json();

        return result;
    },
    insect : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/insects/${id}`);
        const response = await fetch (`${API_URL}/insects/${id}`);
        const result = await response.json();

        return result;
    },
    amphibian : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/amphibians/${id}`);
        const response = await fetch (`${API_URL}/amphibians/${id}`);
        const result = await response.json();

        return result;
    },
    fish : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/fishes/${id}`);
        const response = await fetch (`${API_URL}/fishes/${id}`);
        const result = await response.json();

        return result;
    }
};

module.exports = { Query };