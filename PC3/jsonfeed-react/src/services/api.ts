// src/services/api.ts
import axios from 'axios';
// ¡SOLUCIÓN! Usamos 'import type' para las interfaces
import type { User, Post } from '../types/jsonplaceholder';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Función para el listado simple de la Home (6 usuarios)
export const getUsers = async () => {
  try {
    const response = await axios.get<User[]>(`${API_URL}/users?_limit=6`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};

// Función para el listado de entidades (20 publicaciones)
export const getPosts = async () => {
  try {
    const response = await axios.get<Post[]>(`${API_URL}/posts?_limit=20`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener publicaciones:", error);
    return [];
  }
};