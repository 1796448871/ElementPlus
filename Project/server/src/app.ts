import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors'
import authRoutes from './routes/auth';
import articleRoutes from './routes/article';
import exchangeRateRoutes from './routes/exchangeRate';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/exchangeRates', exchangeRateRoutes);


const startServer = async () => {
  // 8.138.23.54
  // 注意,挂梯子和换wifi都有可能导致自身IP不同,导致被墙
  try {
    // 'mongodb://root:179644@8.138.23.54:27017/currencyeg?authSource=admin'
    await mongoose.connect('mongodb://username:password@127.0.0.1:27017/currencyeg?authSource=admin')
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

startServer();
