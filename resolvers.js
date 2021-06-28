const fetch = require('node-fetch');
const API_URL= 'http://localhost:3000/api/v1';

const Query = {
    reptile : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/Reptiles/${id}`);
        const response = await fetch (`${API_URL}/Reptiles/${id}`);
        const result = await response.json();

        return result;
    },
    bird : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/Birds/${id}`);
        const response = await fetch (`${API_URL}/Birds/${id}`);
        const result = await response.json();

        return result;
    },
    mammal : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/Mammals/${id}`);
        const response = await fetch (`${API_URL}/Mammals/${id}`);
        const result = await response.json();

        return result;
    },
    insect : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/Mammals/${id}`);
        const response = await fetch (`${API_URL}/Mammals/${id}`);
        const result = await response.json();

        return result;
    },
    amphibian : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/Amphibians/${id}`);
        const response = await fetch (`${API_URL}/Amphibians/${id}`);
        const result = await response.json();

        return result;
    },
    fish : async (parent, args, context, info) => {
        const { id } = args;
        console.log(`${API_URL}/Fish/${id}`);
        const response = await fetch (`${API_URL}/Fish/${id}`);
        const result = await response.json();

        return result;
    }
};

module.exports = { Query };