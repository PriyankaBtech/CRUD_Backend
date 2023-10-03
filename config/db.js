require('dotenv').config()

const mongoose = require('mongoose')

const connectToDB = async () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then((conn) => {
        console.log(`Connected to DB : ${conn.connection.host}`)
    })
    .catch((err) => {
        console.log(err.message)
        process.exit(1)
    })    

}

module.exports = connectToDB


// (async () => {
//     try {
//         // db connection
//         await mongoose.connect('dbstring') // .env, dotenv
//         console.log("Database connected successfully")
        
//         // for application | express
//         app.on("error", (err) => {
//             console.log("ERROR: ", err)
//             throw err
//         })

//         const onListening = () => {
//             console.log(`Listing on port ${port}`)
//         }

//         app.listen(port, onListening)

        
//     } catch (error) {
//         console.log("Error :", error)
//         throw error        
//     }
// })()