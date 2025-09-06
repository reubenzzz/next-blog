import axios from 'axios';

const MOCK_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://68bc411d0f2491613ede798f.mockapi.io/api'; // replace or use local

export const fetchPosts = async (search = '') => {
  // If using mockapi.io: GET /posts?search=...
  const q = search ? `?search=${encodeURIComponent(search)}` : '';
  const res = await axios.get(`${MOCK_BASE}/posts${q}`);
  return res.data;
};

export const fetchPostById = async (id) => {
  const res = await axios.get(`${MOCK_BASE}/posts/${id}`);
  return res.data;
};
