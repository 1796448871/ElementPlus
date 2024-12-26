import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors'
import authRoutes from './routes/auth';
import articleRoutes from './routes/article';
import exchangeRateRoutes from './routes/exchangeRate';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/exchangeRates', exchangeRateRoutes);




const startServer = async () => {
  // 注意,挂梯子和换wifi都有可能导致自身IP不同,导致被墙
  try {
    // 这里为了让函数读取我的env的环境变量直接让他as string了
    // 如果你想明文存储可以直接将'process.env.MONGODB_URI as string'换为你的mongodb地址

    await mongoose.connect(process.env.MONGODB_URI as string)
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
