import express, { request, response } from 'express'

const app = express()

let PORT: number = 3003

app.get("/", (request, response) => {
    return response.json({message: "Hello Word to #NLW04🎉"})
})

app.post("/", (request, response) => {
    return response.json({message: "Dados salvos com sucesso ✔"})
})

app.listen(PORT, () => console.log("Server is running ✔"))