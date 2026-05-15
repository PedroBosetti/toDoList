import { Router } from "express"
import { registrar, login } from "../controllers/auth.js"

const rotaUsuario = Router()

rotaUsuario.post("/registro", registrar)
rotaUsuario.post("/login", login)

export default rotaUsuario