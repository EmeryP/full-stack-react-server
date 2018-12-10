import express from 'express';
import router from './api/routes.js'
import error from './public/error.js';
import notFound from './public/404.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(router)
app.use(error)
app.use(notFound)
app.use(cors)

let isRunning = false;

module.exports = {
  app,
  start: (port) => {
    if(! isRunning){
      app.listen(port, (err) => {
        if(err){throw err;}
        isRunning = true;
        console.log('Server is running on port', port)
      });
    }
  },
};

