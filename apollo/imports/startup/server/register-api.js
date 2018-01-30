import { createApolloServer } from 'meteor/apollo';  // I've added apollo into .meteor/packages
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';


import ResolutionsResolvers from '../../api/resolutions/resolvers';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

// const typeDefs = `
//   type Query {
//     hi: String
//   }
// `;

// hi

const testSchema = `
  type Query {
    hi: String,
    resolutions: [Resolution]
  }
`;


const typeDefs = [
  testSchema,
  ResolutionsSchema
];


const resolver = {
  Query: {
    hi() {
      return "hello level up!";  // In here, you need to use double quote instead of single quote. if you use single quote, then you will met the error.
    },
  }
};

const resolvers = merge(
  resolver,
  ResolutionsResolvers
)

// console.log(resolvers);



const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });