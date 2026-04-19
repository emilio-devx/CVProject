import express from "express"
import fetch from "node-fetch"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config() // --> Activa .env 

const app = express() // --> Creo servidor
app.use(cors()) // --> Permito conexiones desde React

app.get("/images", async (req, res) => {
    try {
        const response = await fetch(
            "https://api.pexels.com/v1/search?query=roller skates&per_page=8",
        {headers: {
            Authorization: process.env.PEXELS_API_KEY
        }
    }
)
const data = await response.json()
res.json(data)
}catch(error){
    res.status(500).json({ error: error.message })
}
})

// Arranco el servidor
app.listen(3001, () => {
    console.log("Servidor corriendo en http://localhost:3001")
})