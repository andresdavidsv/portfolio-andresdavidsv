import { Social } from '@/interfaces';

interface ApiResponse {
  socials: Social[];
}

export const fetchSocials = async () => {
  try {
    const apiUrl = new URL(
      '/api/getSocials',
      process.env.NEXT_PUBLIC_BASE_URL
    ).toString();
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(
        'No se pudo obtener la información de las redes sociales'
      );
    }
    const data: ApiResponse = await res.json();
    return data.socials;
  } catch (error) {
    console.error(error);
    throw new Error(
      'Hubo un error al obtener la información de las redes sociales'
    );
  }
};
