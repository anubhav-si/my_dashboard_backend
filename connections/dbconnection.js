const mongoose = require('mongoose');

async function handleDbConnection (url) {
    await mongoose.connect(url)
    .then(()=>console.log("mongo db connected"))
    .catch((err)=>console.log(`error:${err}`));
    
}

module.exports = {handleDbConnection}