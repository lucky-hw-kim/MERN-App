
import axios from "axios";

const API = axios.create({ baseURL: 'https://socialmedia-mernstack.herokuapp.com/'});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`)
export const likePost = (id, userId) => API.post(`/post/${id}/like`, {userId: userId})