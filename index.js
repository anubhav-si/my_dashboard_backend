require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

const {handleDbConnection} = require('./connections/dbconnection');
const userRouter = require('./routes/user');
const productRouter = require("./routes/product");
const messageRouter = require("./routes/message");
const ProductRouter24 = require("./routes/24Products");


const app = express();
const port = process.env.PORT;


app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}))

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",userRouter);
app.use("/product",productRouter);
app.use("/message",messageRouter);
app.use("/web",ProductRouter24);

handleDbConnection(process.env.MONGO_URI)
.then(()=>app.listen(port,()=>console.log('server started')))
.catch(()=>process.exit(1));