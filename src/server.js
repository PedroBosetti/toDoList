import express from 'express';
import dotenv from 'dotenv/config';
import prisma from "./lib/prisma.js"
import conectar from './dataBase.js';

import rotasUsuario from "./routes/auth.js"
import rotaTarefas from "./routes/tarefas.js"

const app = express()
app.use(express.json())

app.use("/auth", rotasUsuario)
app.use("/tarefas", rotaTarefas)

async function iniciarServidor() {

    await conectar()

    app.listen(3000, () =>{
        console.log(`Server rodando na porta 3000✅`)
    })
}

iniciarServidor()