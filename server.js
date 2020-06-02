const express= require('express');
const connectDB= require('./config/db');

//* Initialize Express
const app= express();
//* Connect Database
connectDB();
//* Init Middleware
app.use(express.json({extended:false}));



//* Defining Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));






const PORT= process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));