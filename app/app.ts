import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World la chucha!');
});

app.use(express.json)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
 