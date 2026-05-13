import express from 'express';
import dotenv from 'dotenv/config';
import prisma from "./lib/prisma.js"
import conectar from './dataBase.js';

const app = express()
app.use(express.json())


async function iniciarServidor() {

    await conectar()

    app.listen(3000, () =>{
        console.log(`Server rodando na porta 3000✅`)
    })
}

iniciarServidor()