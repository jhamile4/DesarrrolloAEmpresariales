// src/services/api.ts
import axios from 'axios';
// SOLUCIÓN: Usar 'import type' para las interfaces
import type { ApiResponse, Character } from '../types/dragonball';

const API_URL = 'https://dragonball-api.com/api/characters';

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_URL}?limit=30`);
    return response.data.items;
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    return [];
  }
};