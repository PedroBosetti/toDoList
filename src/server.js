import express from 'express';
const app = express()
app.use(express.static('public'))


app.listen(3000, () =>{
    console.log(`Server rodando na porta 3000✅`)
})