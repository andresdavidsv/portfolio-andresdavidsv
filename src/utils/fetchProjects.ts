import { Project } from '@/interfaces';

interface ApiResponse {
  projects: Project[];
}

export const fetchProjects = async () => {
  try {
    const apiUrl = new URL(
      '/api/getProjects',
      process.env.NEXT_PUBLIC_BASE_URL
    ).toString();
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('No se pudo obtener la información de proyectos');
    }
    const data: ApiResponse = await res.json();
    return data.projects;
  } catch (error) {
    console.error(error);
    throw new Error('Hubo un error al obtener la información de proyectos');
  }
};
