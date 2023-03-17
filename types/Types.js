const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
  } = require("graphql");

// product type
const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
      id: { type: GraphQLID },
      img: { type: GraphQLString },
      title: { type: GraphQLString },
      decsiprion: { type: GraphQLString },
      brend: { type: GraphQLString },
      price: { type: GraphQLInt },
      altDescription: { type: GraphQLString },
      category: { type: GraphQLString },
      article: { type: GraphQLInt },
    }),
  });

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        nameRu: { type: GraphQLString },
        linkName: { type: GraphQLString }
    })
})

module.exports = {
  ProductType,
  CategoryType
}