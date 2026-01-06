const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

const {handleDbConnection} = require('./connections/dbconnection');
const userRouter = require('./routes/user');
const productRouter = require("./routes/product");


const app = express();
const port = 3001


app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",userRouter);
app.use("/product",productRouter);

handleDbConnection("mongodb://127.0.0.1:27017/my_dashboard")
.then(()=>app.listen(port,()=>console.log('server started')))
.catch(()=>process.exit(1));