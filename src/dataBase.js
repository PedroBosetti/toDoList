import { syncBuiltinESMExports } from "node:module"
import prisma from "./lib/prisma.js"

async function conectar() {

    try {
        await prisma.$connect()
        console.log("Conectado ao banco de dados com sucesso!✅")
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error)
    }
}

export default conectar