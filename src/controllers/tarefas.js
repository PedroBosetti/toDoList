import prisma from "../lib/prisma.js"

export async function criarTarefa(req, res) {
    try {
        const {titulo, descricao} = req.body
        
        const tarefa = await prisma.tarefa.create({
            data: {
                titulo,
                descricao,
                usuarioId: req.usuarioId
            }
        })
        return res.status(201).json(tarefa)
    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao criar tarefa" })
    }
}



export async function listarTarefas(req, res) {
    try {
        const tarefas = await prisma.tarefa.findMany({
            where: { usuarioId: req.usuarioId }
        })

        return res.status(200).json(tarefas)
    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao listar tarefas" })
    }
}

export async function listarTarefa(req, res) {
    try {
        const { id } = req.params
        const tarefa = await prisma.tarefa.findUnique({
            where: { id, usuarioId: req.usuarioId }
        })

        return res.status(200).json(tarefa)
    } catch(erro) {
        console.log(erro)
        return res.status(500).json({ erro: "Erro ao listar tarefa"})
    }
}

export async function listarTarefaPorStatus(req, res) {
    const  { concluida } = req.query
    try{
        const tarefas = await prisma.tarefa.findMany({
            where: { usuarioId: req.usuarioId, concluida: concluida === "true"}
        })
        return res.status(200).json(tarefas)
    } catch(erro) {
        console.log(erro)
        return res.status(500).json("Erro ao listar tarefas")
    }
}



export async function atualizarTarefa(req, res) {
    try {
        const { id } = req.params
        const { titulo, descricao } = req.body

        const tarefa = await prisma.tarefa.update({
            where: { id, usuarioId: req.usuarioId },
            data: { titulo, descricao }
        })

        return res.status(200).json(tarefa)
    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao atualizar tarefa" })
    }
}



export async function concluirTarefa(req, res) {
    try {
        const { id } = req.params
        const tarefa = await prisma.tarefa.update({
            where: { id, usuarioId: req.usuarioId},
            data: {concluida: true}
        })
        return res.status(200).json(tarefa)
    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao concluir tarefa" })
    }
}



export async function deletarTarefa(req, res) {
    try {
        const { id } = req.params
        await prisma.tarefa.delete({
            where: { id, usuarioId: req.usuarioId}
        })
        return res.status(204).json()
    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao deletar tarefa" })
    }
}


