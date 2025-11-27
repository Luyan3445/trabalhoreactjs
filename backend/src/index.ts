import express from 'express';
import cors from 'cors';
import { pets } from './data/pets';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/pets', (req, res) => {
  const { type, search } = req.query as any;
  let result = pets;
  if (type) result = result.filter(p => p.type === type);
  if (search) result = result.filter(p => p.name.toLowerCase().includes(String(search).toLowerCase()));
  res.json(result);
});

app.get('/api/pets/:id', (req, res) => {
  const id = Number(req.params.id);
  const pet = pets.find(p => p.id === id);
  if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });
  res.json(pet);
});

app.post('/api/pets', (req, res) => {
  const { name, age, type, breed, description, location } = req.body;
  const id = pets.length ? Math.max(...pets.map(p=>p.id)) + 1 : 1;
  const newPet = { id, name, age, type, breed, description, photo:'', location };
  pets.push(newPet);
  res.status(201).json(newPet);
});

// simple fake auth and registration endpoints for demo
const users: any[] = [];

app.post('/api/register-person', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Dados incompletos' });
  const exists = users.find(u=>u.email===email);
  if (exists) return res.status(400).json({ message:'Email já cadastrado' });
  const user = { id: users.length+1, name, email, type: 'person' };
  users.push({...user, password});
  res.status(201).json({ user });
});

app.post('/api/register-ong', (req, res) => {
  const { name, email, password, cnpj } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Dados incompletos' });
  const exists = users.find(u=>u.email===email);
  if (exists) return res.status(400).json({ message:'Email já cadastrado' });
  const user = { id: users.length+1, name, email, type: 'ong', cnpj };
  users.push({...user, password});
  res.status(201).json({ user });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u=>u.email===email && u.password===password);
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });
  const { password: _p, ...safe } = user;
  res.json({ user: safe });
});

app.post('/api/adopt', (req, res) => {
  const { petId, name, email } = req.body;
  console.log('Pedido de adoção:', { petId, name, email });
  res.json({ success: true, message: 'Pedido recebido' });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`BABIDI API RODANDO NA PORTA ${PORT}`));
