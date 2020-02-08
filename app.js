const express = require('express');

const PORT = 3001;

const app = express();

const database = [
  {
    id: 2,
    firstName: 'Emil',
    lastName: 'Kulmuhametov',
  },
  { 
    id: 3,
    firstName: 'Oleg',
    lastName: 'Petrov',
  },
  { 
    id: 4,
    firstName: 'John',
    lastName: 'Clay',
  }
]

app.use('/user', (req, res) =>  {
  const id = req.query.id;
  console.log('ID! ====>>>>', id);
  const user = database.find((i) => +i.id === +id);
  if (user) {
    res.send(user);
  } else {
    res.send('Error: There is not user with such id!!!!!!');
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})