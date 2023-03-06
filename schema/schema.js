const Product = require("../models/Product");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
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

const Rootquery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      // получить весь список продуктов
      type: new GraphQLList(ProductType),
      resolve() {
        return Product.find();
      },
    },
    product: {
      // получить конкретный продукт по айди
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
  },
});
// ----------- \\

// mutations

const mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addProduct:{
        type: ProductType,
        args:{
            id: { type: GraphQLID },
            img: { type: GraphQLString },
            title: { type: GraphQLString },
            decsiprion: { type: GraphQLString },
            brend: { type: GraphQLString },
            price: { type: GraphQLInt },
            altDescription: { type: GraphQLString },
            category: { type: GraphQLString },
            article: { type: GraphQLInt },
        },
        resolve(parent,arg){
            const product = new Product({
                id: arg.id,
                img: arg.img,
                title: arg.title,
                decsiprion: arg.decsiprion,
                brend: arg.brend,
                price: arg.price,
                altDescription: arg.altDescription,
                category: arg.category,
                article: arg.article,
            })
            Product.create()
            return product.save();
        }
    }
  },
});

module.exports = new GraphQLSchema({
  query: Rootquery,
  mutation,
});
