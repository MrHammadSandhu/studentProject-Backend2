const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        await mongoose.connect("")
        console.log("DataBase connted successfully")
    } catch (error) {
        console.log("Error Ouccred")
    }
}