const Product = require("../models/Product");
const Category = require("../models/Categories");

const {ProductType, CategoryType} = require("../types/Types");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const Rootquery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    productsAll: {
      // получить весь список продуктов
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find().exec();
      },
    },
    products: {
      // получить весь список продуктов по категории
      type: new GraphQLList(ProductType),
      args: { category: { type:GraphQLString }},
      resolve(parent, args) {
        return Product.find(args).exec();
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
    categories: {
      // получить список категорий
      type: new GraphQLList(CategoryType),
      resolve(parent, args){
        return Category.find().exec()
      }
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
    },
    addCategory:{
      type: CategoryType,
      args: {
          nameRu: { type: GraphQLString },
          linkName: { type: GraphQLString },
      },
      resolve(parent,arg){
        const category = new Category({
          nameRu: arg.nameRu,
          linkName: arg.linkName,
        })
        Category.create()
        return category.save()
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: Rootquery,
  mutation,
});
