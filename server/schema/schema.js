const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
//dummy data
const books = [
  { name: "book one", genre: "Fantasy", id: "1" },
  { name: "book two", genre: "Fantasy", id: "2" },
  { name: "book three", genre: "Fantasy", id: "3" },
  { name: "book four", genre: "Fantasy", id: "4" },
  { name: "book five", genre: "Fantasy", id: "5" },
  { name: "book six", genre: "Fantasy", id: "6" },
  { name: "book seven", genre: "Fantasy", id: "7" },
  { name: "book eight", genre: "Sci-Fi", id: "8" },
  { name: "book nine", genre: "Sci-Fi", id: "9" },
  { name: "book ten", genre: "Sci-Fi", id: "10" },
  { name: "book eleven", genre: "Sci-Fi", id: "11" },
  { name: "book twelve", genre: "Sci-Fi", id: "12" },
  { name: "book thirteen", genre: "Sci-Fi", id: "13" }
];

//object type bookType
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db/ other source
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
