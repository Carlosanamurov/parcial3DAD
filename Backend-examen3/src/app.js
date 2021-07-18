
import express from 'express'
import morgan from 'morgan'
import authRoutes from './routers/auth.routes'
import userRoutes from './routers/user.routes'
import mailRoutes from './routers/email.routes'
import perRoutes from './routers/persona.routes'
import archiRoutes from './routers/archivo.routes'

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Bienvenido a Node JS...!');
});
app.use('/api/auth', authRoutes);
app.use('/api/auth/users', userRoutes);
app.use('/api/auth/mail', mailRoutes);
app.use('/api/auth/persona',perRoutes);
app.use('/api/auth/archivos',archiRoutes)


export default app;