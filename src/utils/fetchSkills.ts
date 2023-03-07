import { Skill } from '@/interfaces';

interface ApiResponse {
  skills: Skill[];
}

export const fetchSkills = async () => {
  try {
    const apiUrl = new URL(
      '/api/getSkills',
      process.env.NEXT_PUBLIC_BASE_URL
    ).toString();
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('No se pudo obtener la información de las habilidades');
    }
    const data: ApiResponse = await res.json();
    return data.skills;
  } catch (error) {
    console.error(error);
    throw new Error(
      'Hubo un error al obtener la información de las habilidades'
    );
  }
};
