import { Experience } from '@/interfaces';

interface ApiResponse {
  experiences: Experience[];
}

export const fetchExperiences = async () => {
  try {
    const apiUrl = new URL(
      '/api/getExperience',
      process.env.NEXT_PUBLIC_BASE_URL
    ).toString();
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('No se pudo obtener la información de experiencias');
    }
    const data: ApiResponse = await res.json();
    return data.experiences;
  } catch (error) {
    console.error(error);
    throw new Error('Hubo un error al obtener la información de experiencias');
  }
};
