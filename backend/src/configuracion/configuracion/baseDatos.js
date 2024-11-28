const mongoose = require('mongoose')
const dotev = require('dotenv')
dotev.config()

const conectarDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        }catch(error){
            console.error('Error en la conexion a MongoDB: ', error)
            process.exit(1)
    }
}