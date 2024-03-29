const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
 const corsOptions = {
  origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
};

const PORT = process.env.PORT || 5500;
const app = express();

const connectDB = require('./conexiondb')

const TodoItemRoute = require('./routes/todoItems')


app.use(express.json());
app.use(cors(corsOptions));
//app.use(cors());
connectDB();

app.use('/',TodoItemRoute)

app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})