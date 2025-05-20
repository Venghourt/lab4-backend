import express from 'express';
import userRoutes from '/c:/Users/USER/Downloads/StartCode/StartCode/EX-1/routes/userRoutes.js';
import logger from '/c:/Users/USER/Downloads/StartCode/StartCode/EX-1/middleware/logger.js';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
