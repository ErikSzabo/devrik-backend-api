import monk from 'monk';

const db = monk(process.env.MONGODB_URI || '127.0.0.1:27017/devrik-api');

export default db;
