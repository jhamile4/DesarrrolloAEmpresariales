// src/types/jsonplaceholder.ts

// El 'personaje' de la Home será un Usuario
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// La 'entidad' de /entities será una Publicación (Post)
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}