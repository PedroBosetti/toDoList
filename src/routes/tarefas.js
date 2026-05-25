import { Router } from "express"
import { criarTarefa, listarTarefas, listarTarefaPorStatus, listarTarefa ,atualizarTarefa, concluirTarefa, deletarTarefa } from "../controllers/tarefas.js"
import { auth } from "../middlewares/auth.js"

const rotaTarefas = Router()

rotaTarefas.post("/", auth, criarTarefa)

rotaTarefas.get("/", auth, listarTarefas)
rotaTarefas.get("/status", auth, listarTarefaPorStatus)
rotaTarefas.get("/:id", auth, listarTarefa)

rotaTarefas.patch("/:id", auth, atualizarTarefa)
rotaTarefas.patch("/:id/concluir", auth, concluirTarefa)

rotaTarefas.delete("/:id", auth, deletarTarefa)

export default rotaTarefas