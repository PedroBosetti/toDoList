# ToDoList API

API REST de gerenciamento de tarefas com autenticação JWT.

**Tecnologias:** Node.js · Express · Prisma · PostgreSQL · JWT · bcrypt

---

## Testando a API

Você pode testar pelo deploy ou rodando localmente:

**Deploy:** `https://todolist-backend-no8b.onrender.com`

**Local:**
```bash
git clone https://github.com/testeBosetti/toDoList.git
cd toDoList
npm install
```

Crie um `.env` na raiz:
```env
DATABASE_URL="postgresql://usuario:senha@host:5432/banco"
JWT_SECRET="sua_chave_secreta"
```

```bash
npx prisma migrate dev
npm run dev
```

Servidor em `http://localhost:3000`

---

As rotas abaixo funcionam para os dois — só troca a URL base.

---

## Rotas

### Registrar

```
POST /auth/registrar
```
```json
{
  "usuario": "teste",
  "email": "teste@email.com",
  "senha": "123456"
}
```

### Login

```
POST /auth/login
```
```json
{
  "email": "teste@email.com",
  "senha": "123456"
}
```

Retorna um token — use ele no header das rotas de tarefas:
```
Authorization: Bearer seu_token
```

### Perfil

```
GET /auth/perfil
```

---

### Criar tarefa

```
POST /tarefas
```
```json
{
  "titulo": "Minha tarefa",
  "descricao": "Descrição da tarefa"
}
```

### Listar todas as tarefas

```
GET /tarefas
```

### Buscar tarefa por ID

```
GET /tarefas/:id
```

### Filtrar por status

```
GET /tarefas/status?concluida=true
GET /tarefas/status?concluida=false
```

### Atualizar tarefa

```
PATCH /tarefas/:id
```
```json
{
  "titulo": "Novo título",
  "descricao": "Nova descrição"
}
```

### Concluir tarefa

```
PATCH /tarefas/:id/concluir
```

### Deletar tarefa

```
DELETE /tarefas/:id
```
