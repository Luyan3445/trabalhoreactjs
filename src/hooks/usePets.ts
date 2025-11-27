import { useState, useEffect } from 'react';

export default function usePets() {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchPets(q = ''){
    setLoading(true);
    const res = await fetch('/api/pets' + (q?`?search=${encodeURIComponent(q)}`:''));
    const data = await res.json();
    setPets(data);
    setLoading(false);
  }

  useEffect(()=>{ fetchPets(); },[]);

  return { pets, loading, fetchPets, setPets };
}
