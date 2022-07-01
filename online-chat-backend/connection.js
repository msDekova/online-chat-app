const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.uisjche.mongodb.net/${process.env.DB_NAME }?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
