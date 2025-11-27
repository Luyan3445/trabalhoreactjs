export type PetType = 'dog' | 'cat' | 'other';

/**
 * Interface Pet
 * Campos em inglês por compatibilidade, nomes visíveis em português.
 */
export interface Pet {
  id: number;
  name: string;
  age: string;
  type: PetType;
  breed?: string;
  description?: string;
  photo?: string;
  location?: string;
}
