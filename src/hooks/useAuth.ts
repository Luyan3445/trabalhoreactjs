import { useState, useEffect } from 'react';

type User = { id: number; name: string; email: string } | null;

const storageKey = 'adota_user';

export default function useAuth() {
  const [user, setUser] = useState<User>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  });

  useEffect(()=>{
    localStorage.setItem(storageKey, JSON.stringify(user));
  },[user]);

  async function login(email: string, password: string) {
    // fake login - backend will accept any credentials for demo
    const res = await fetch('/api/login', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) return false;
    const data = await res.json();
    setUser(data.user);
    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(storageKey);
  }

  return { user, login, logout };
}
