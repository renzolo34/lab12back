import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri: string = process.env.DATABASE_URL ?? '' ;

mongoose.connect(uri);

mongoose.connection.on('error', console.error.bind(console, 'Error al conectarse con la base de datos.'));

mongoose.connection.once('open', () => {
  console.log('Conexión con la base de datos iniciada.');
});

export default mongoose;