import cors from 'cors';
import express from 'express';
import '#db';
import { errorHandler, notFoundHandler } from '#middleware';
import { postRoutes } from '#routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/posts', postRoutes);

app.use('*splat', notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`API Server listening on http://localhost:${port}`));
