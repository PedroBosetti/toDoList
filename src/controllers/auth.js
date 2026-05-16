import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function registrar(req, res) {
    try {
        const { usuario, email, senha } = req.body;
        
        const senhaHash  = await bcrypt.hash(senha, 10);
        
        const novoUsuario = await prisma.usuario.create({
            data: {
                usuario,
                email,
                senha: senhaHash
            }
        })
        const { senha: _, ...usuarioSemSenha} = novoUsuario
        res.status(201).json(usuarioSemSenha)
    } catch (erro) {
        console.error(erro)
        res.status(500).json({ erro: "Erro ao registrar usuário" })
    }
}



export async function login(req, res) {
    try {
        const { email, senha } = req.body

        const usuario = await prisma.usuario.findUnique({
            where: { email }
        })

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" })
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if (!senhaValida) {
            return res.status(401).json({ erro: "Senha incorreta"})
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {expiresIn: "7d"})
        const { senha: _, ...usuarioSemSenha} = usuario

        return res.status(200).json({
            usuario: usuarioSemSenha,
            token
        })
    } catch (erro) { 
        res.status(500).json({ erro: "Erro ao fazer login" })
    }
}


export async function perfil(req, res) {

    try {

        const usuario = await prisma.usuario.findUnique({
            where: {
                id: req.usuarioId
            }
        })

        const { senha: _, ...usuarioSemSenha } = usuario

        return res.status(200).json(usuarioSemSenha)

    } catch (erro) {

        return res.status(500).json({
            erro: "Erro ao buscar perfil"
        })

    }
}

