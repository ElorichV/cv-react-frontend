import axios from 'axios';
// Asumiendo que mueves tus interfaces a un archivo types, o las importas aquí
// Por ahora usamos 'any' o copiamos la interfaz UserProfile para no complicarte el refactor inmediato

const API_URL = 'https://d1xk37jjpjmwph.cloudfront.net/api/Profile';

export const getProfileData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error en servicio API:", error);
    throw error; // Relanzamos el error para que el componente decida qué mostrar
  }
};