import express from "express"
import "dotenv/config.js"
import "./config/database.js"

const server = express()
const PORT = process.env.PORT || 8080



const ready = () => console.log("El servidor esta en el puerto " + PORT);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });