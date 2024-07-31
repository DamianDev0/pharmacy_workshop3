import express from 'express';
import { router } from '../app/routes/router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
