import { useState } from 'react';

export default function useForm<T extends Record<string, any>>(initial:T){
  const [values, setValues] = useState(initial);
  function setField<K extends keyof T>(field:K, value:T[K]){
    setValues(prev=> ({...prev, [field]: value}));
  }
  return { values, setField, setValues };
}
