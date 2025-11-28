// Importo o Express, que é o framework usado para criar nosso servidor HTTP
import express from 'express';
// Importo o CORS, que permite que o frontend acesse o backend sem bloquear
import cors from 'cors';
// Importo o array de pets e o tipo RawPet, que simulam nosso banco de dados
import { pets as rawPets, Pet as RawPet } from './data/pets';

const app = express();

// Ativo o CORS para evitar erro de bloqueio entre frontend e backend
app.use(cors());
// Habilito o servidor a receber requisições com JSON (body parser)
app.use(express.json());

// Deixo a pasta "public" acessível para servir arquivos/imagens
app.use('/public', express.static('public'));

// Função que converte o formato do pet do backend
// para o formato esperado pelo frontend (com nomes em inglês)
function mapPet(p: RawPet) {
    return {
        id: p.id,
        name: p.nome,
        age: p.idade,
        type: p.tipo,
        breed: p.raca || undefined,
        description: p.descricao || undefined,
        photo: p.imagem_url || undefined,
        location: p.local || undefined
    };
}

/////////////////////////////////////
//        ROTAS DE PETS
/////////////////////////////////////

// Rota para listar pets, com filtros de tipo e busca
app.get('/api/pets', (req, res) => {
    const { type, search } = req.query as any;

    let result = rawPets.slice(); // copia os pets

    // Filtro por tipo
    if (type) result = result.filter(p => p.tipo === type);

    // Filtro por nome do pet
    if (search)
        result = result.filter(p =>
            p.nome.toLowerCase().includes(String(search).toLowerCase())
        );

    // Retorna os pets convertidos para o frontend
    res.json(result.map(mapPet));
});

// Rota para buscar um pet específico pelo ID
app.get('/api/pets/:id', (req, res) => {
    const id = Number(req.params.id);

    const p = rawPets.find(x => x.id === id);

    if (!p) return res.status(404).json({ error: 'Pet not found' });

    res.json(mapPet(p));
});

// Rota para adicionar um novo pet
app.post('/api/pets', (req, res) => {
    const { name, age, type, breed, description, location } = req.body;

    // Verifica se campos obrigatórios foram enviados
    if (!name || !age || !type)
        return res.status(400).json({ error: 'Missing fields' });

    // Gera ID automaticamente com base no maior ID existente
    const newId = rawPets.reduce((m, x) => Math.max(m, x.id), 0) + 1;

    // Cria novo pet no formato do "banco" bruto
    const newPet: RawPet = {
        id: newId,
        nome: String(name),
        idade: String(age),
        tipo: type,
        raca: breed || '',
        descricao: description || '',
        imagem_url: '',
        local: location || ''
    };

    rawPets.push(newPet);

    res.status(201).json(mapPet(newPet));
});

/////////////////////////////////////
//         SISTEMA DE USUÁRIOS
/////////////////////////////////////

// Tipo User usado no servidor
type User = { id: number; name: string; email: string; password: string };

// Banco de usuários falso para testes
const users: User[] = [
    { id: 1, name: 'Test User', email: 'test@example.com', password: 'password' }
];

// LOGIN
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Procuro um usuário que tenha email e senha correspondentes
    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    // Removo a senha antes de enviar os dados ao frontend
    const { password: _p, ...safe } = user;

    res.json({ user: safe });
});

// CADASTRO DE ONG
app.post('/api/register-ong', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res.status(400).json({ error: 'Missing fields' });

    // Gero novo ID de usuário
    const id = users.reduce((m, u) => Math.max(m, u.id), 0) + 1;

    const user = { id, name, email, password };
    users.push(user);

    // Retorno o usuário sem a senha
    res.status(201).json({ user: { id, name, email } });
});

// CADASTRO DE PESSOA
app.post('/api/register-person', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res.status(400).json({ error: 'Missing fields' });

    const id = users.reduce((m, u) => Math.max(m, u.id), 0) + 1;

    const user = { id, name, email, password };
    users.push(user);

    res.status(201).json({ user: { id, name, email } });
});

// PEDIDO DE ADOÇÃO
app.post('/api/adopt', (req, res) => {
    const { petId, name, email } = req.body;

    // Aqui apenas simulamos guardando no console
    console.log('Adoption request', { petId, name, email });

    res.json({ success: true, message: 'Pedido recebido' });
});


//          INICIAR SERVIDOR
// Define a porta do servidor. Se não tiver variável de ambiente, usa 3333
const PORT = process.env.PORT || 3333;

// Inicia o servidor
app.listen(PORT, () =>
    console.log(`Adota+ API running on port ${PORT}`)
);
