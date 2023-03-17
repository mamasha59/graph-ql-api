const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const colors = require('colors');

//mongoose
const connectMongooseDB = require('./config/db');

const app = express(); // создаем приложение

// Полключаемся в базе
connectMongooseDB();

app.use(express.json());

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

app.use(express.static('public'));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const port = process.env.PORT || 3001;

app.listen(port, ()=>{ console.log(`Сервер запущен на порту ${port}`.red)});