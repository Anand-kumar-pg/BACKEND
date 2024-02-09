const app = require("./app");
const connectDataBase = require("./config/dataBase");
const userRoutes = require("./routes/userRoutes")
const dotenv = require("dotenv");


dotenv.config({path:"./config/config.env"})

connectDataBase();
app.use("/api/user/",userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("server running");
})