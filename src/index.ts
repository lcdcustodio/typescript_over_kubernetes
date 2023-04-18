import express from 'express';

const app = express();
app.listen(3000, () => {
  console.log(`server running on port 3000`);
});


app.get('/', (req, res) => {
    console.log('Hello World, from express');
    res.send('Hello World, from express');
});

app.listen(() => console.log(`Hello world app listening on port`))