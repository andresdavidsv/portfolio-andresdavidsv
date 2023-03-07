import { PageInfo } from '@/interfaces';
interface ApiResponse {
  pageInfo: PageInfo;
}
export const fetchPageInfo = async () => {
  try {
    const apiUrl = new URL(
      '/api/getPageInfo',
      process.env.NEXT_PUBLIC_BASE_URL
    ).toString();
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('No se pudo obtener la información de la página');
    }
    const data: ApiResponse = await res.json();
    return data.pageInfo;
  } catch (error) {
    console.error(error);
    throw new Error('Hubo un error al obtener la información de la página');
  }
};
