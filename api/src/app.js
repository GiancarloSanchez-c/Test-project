const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const divisionRoutes = require('./routes/divisions.routes');
const userRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');
const rolRoutes = require('./routes/rol.routes');

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({origin:true}))
app.use('/api/divisions', divisionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/rol', rolRoutes);

module.exports = app;