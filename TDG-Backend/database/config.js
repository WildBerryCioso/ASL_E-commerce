const mongoose = require('mongoose');


const dbConexion = async() => {
    
    try{

        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true
        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD')
    }
}

module.exports = {
    dbConexion
}