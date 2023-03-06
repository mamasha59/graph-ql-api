const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const colors = require('colors');
//mongoose
const connectMongooseDB = require('./config/db');

const port = process.env.PORT || 3001;

const app = express(); // создаем приложение

app.use(express.json())

// Полключаемся в базе
connectMongooseDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, ()=>{ console.log(`Сервер запущен на порту ${port}`.red)});