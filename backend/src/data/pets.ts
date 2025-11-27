export interface Pet {
  id: number;
  name: string;
  age: string;
  type: 'dog' | 'cat' | 'other';
  breed?: string;
  description?: string;
  photo?: string;
  location?: string;
}

export const pets: Pet[] = [
  { id: 1, name: 'Bolinha', age: '2 anos', type: 'dog', breed: 'Vira-lata', description: 'Calmo e carinhoso', photo: '', location: 'Recife' },
  { id: 2, name: 'Mia', age: '1 ano', type: 'cat', breed: 'SRD', description: 'Brincalhona', photo: '', location: 'Olinda' },
  { id: 3, name: 'Rex', age: '4 anos', type: 'dog', breed: 'Pastor', description: 'Leal', photo: '', location: 'Paulista' },
  { id: 4, name: 'Luna', age: '3 meses', type: 'cat', breed: 'SRD', description: 'Filhote brincalhona', photo: '', location: 'Recife' },
  { id: 5, name: 'Thor', age: '5 anos', type: 'dog', breed: 'Vira-lata', description: 'Protetor', photo: '', location: 'Jaboatão' }
];
