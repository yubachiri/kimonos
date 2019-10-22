import axios from 'axios';

export async function allKimonos() {
  const url = "https://kimonos.microcms.io/api/v1/kimonos";
  const resp = await axios.get(url, {
    headers: { 'X-API-KEY': process.env.REACT_APP_CMS_API_KEY }
  });
  return resp;
}

export async function selectKimono(id) {
  const url = `https://kimonos.microcms.io/api/v1/kimonos/${id}`;
  const resp = await axios.get(url, {
    headers: { 'X-API-KEY': process.env.REACT_APP_CMS_API_KEY }
  });
  return resp;
}
