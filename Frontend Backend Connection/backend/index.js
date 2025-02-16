// const express = require('express'); {/*we can also use this for import the express, this is called common js */}

import express from 'express'; {/*The common used method, this is called module js. To start the app you have to modify package.json. "type": "module"*/}

const app = express();
 app.get('/',(req,res) =>{
    res.send('Server is ready');
 });

//  Get a list of Student name

app.get('/api/names',(req, res) => {
   const names = [
      {
         id: 1,
         name: 'Kamalesh Sarkar',
         data: 'Hi I am from West Bengle. I love to play game like football, cricket.'
      },
      {
         id: 2,
         name: 'Kamalesh Sarkar',
         data: 'Hi I am from West Bengle. I love to play game like football, cricket.'
      },
      {
         id: 3,
         name: 'Kamalesh Sarkar',
         data: 'Hi I am from West Bengle. I love to play game like football, cricket.'
      },
      {
         id: 4,
         name: 'Kamalesh Sarkar',
         data: 'Hi I am from West Bengle. I love to play game like football, cricket.'
      },
      {
         id: 5,
         name: 'Kamalesh Sarkar',
         data: 'Hi I am from West Bengle. I love to play game like football, cricket.'
      },
   ];
   res.send(names);
})
 const port = process.env.PORT || 3000;

 app.listen(port,() =>{
    console.log(`Serve at http://localhost:${port}`);
    
 });