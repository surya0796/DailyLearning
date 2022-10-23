const mongoose = require("mongoose")


// listening the server, basically a place (port) where this code will be executed on.
mongoose.connect(process.env.DB_connection,{useNewUrlParser: true,useUnifiedTopology:true})
.then((data)=> {
    console.log("Host:",data.connection.host)
    
})
// mongoose.connect(process.env.DB_connection, { useNewUrlParser: true, useUnifiedTopology: false }).then(result => {

//     app.listen(6000, () => {
//         console.log(`App listening on port .`)

//         // console.log("seed>>>>>>>>>>>>>>>>>>> ", seed)
//         // seed.seedDatabase().then(function() {
//         // console.log("seeding completed!");
//         // })

//     });
// }).catch(err => console.log(err));