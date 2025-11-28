// Aqui eu defino a interface Pet, que funciona como um "modelo" dos dados.
// Ela garante que todos os pets do sistema sigam o mesmo formato.
export interface Pet {
    id: number;              // Identificador único do pet
    nome: string;            // Nome do animal
    idade: string;           // Idade do pet (texto mesmo, como "2 anos")
    tipo: 'dog' | 'cat' | 'other'; // Tipo do pet (só aceitam esses 3 valores)
    raca?: string;           // Raça (opcional)
    descricao?: string;      // Descrição do animal
    imagem_url?: string;     // Caminho da imagem do pet
    local?: string;          // Local onde o pet está
}

// Aqui exporto uma lista de pets que funciona como um "banco de dados fake".
// O backend utiliza esses dados para responder às requisições.
export const pets: Pet[] = [
    {
        id: 1,
        nome: 'Bolinha',
        idade: '2 anos',
        tipo: 'dog',
        raca: 'Vira-lata',
        descricao: 'Calmo e carinhoso',
        imagem_url: '/public/img/pets/bob.jpg', // caminho da imagem
        local: 'Recife'
    },
    {
        id: 2,
        nome: 'Luna',
        idade: '1 ano',
        tipo: 'cat',
        raca: 'SRD', // Sem Raça Definida
        descricao: 'Brincalhona',
        imagem_url: '/public/img/pets/luna.jpeg',
        local: 'Olinda'
    },
    {
        id: 3,
        nome: 'Rex',
        idade: '4 anos',
        tipo: 'dog',
        raca: 'Pastor Alemão',
        descricao: 'Leal e protetor',
        imagem_url: '/public/img/pets/rex.jpg',
        local: 'Paulista'
    },
    {
        id: 4,
        nome: 'Mia',
        idade: '3 meses',
        tipo: 'dog',
        raca: 'SRD',
        descricao: 'Filhote brincalhona',
        imagem_url: '/public/img/pets/cachorra.jpg',
        local: 'Recife'
    },
    {
        id: 5,
        nome: 'Thor',
        idade: '5 anos',
        tipo: 'dog',
        raca: 'Buldogue',
        descricao: 'Protetor e dócil',
        imagem_url: '/public/img/pets/thor.jpg',
        local: 'Jaboatão'
    }
];
