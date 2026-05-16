import { Router } from "express"
import { registrar, login, perfil} from "../controllers/auth.js"
import { auth } from "../middlewares/auth.js"

const rotaUsuario = Router()

rotaUsuario.post("/registro", registrar)
rotaUsuario.post("/login", login)
rotaUsuario.get("/perfil", auth, perfil)

export default rotaUsuario