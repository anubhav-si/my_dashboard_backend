const express = require('express');
const cors = require('cors');
const {handleDbConnection} = require('./connections/dbconnection');
const userRouter = require('./routes/user')


const app = express();
const port = 3001

handleDbConnection("mongodb://127.0.0.1:27017/my_dashboard");


app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",userRouter);

app.listen(port,()=>console.log('server started'));