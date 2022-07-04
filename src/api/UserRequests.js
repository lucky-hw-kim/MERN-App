import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:8080'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getAllUsers = () => API.get(`/user/`);
export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (userId, formData) => API.put(`/user/${userId}`, formData);
export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);
export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
