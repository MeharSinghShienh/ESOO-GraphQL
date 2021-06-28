const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        reptile(id: ID!): Reptile,
        bird(id: ID!): Bird,
        mammal(id: ID!): Mammal,
        fish(id: ID!): Fish,
        amphibian(id: ID!): Amphibian,
        insect(id: ID!): Insect,
        message(id: ID!): String
    }

    type Reptile {
        id: ID,
        name: String,
        species: String,
        location: String,
        status: String,
        date: String,
        photo: String
    }

    type Bird {
        id: ID,
        name: String,
        species: String,
        location: String,
        status: String,
        date: String,
        photo: String
    }

    type Mammal {
        id: ID,
        name: String,
        species: String,
        location: String,
        status: String,
        date: String,
        photo: String
    }

    type Fish {
        id: ID,
        name: String,
        species: String,
        location: String,
        status: String,
        date: String,
        photo: String
    }

    type Amphibian {
        id:ID,
        name: String,
        species: String,
        location: String,
        status: String,
        date: String,
        photo: String
    }

    type Insect {
        id: ID,
        name: String,
        species: String,
        location: String,
        status: String,
        date: String,
        photo: String
    }

`;

module.exports = typeDefs;