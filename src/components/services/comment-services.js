import axios from "axios";
// URLS are only Backend URLS

const CommentService = axios.create({
      baseURL: `${process.env.REACT_APP_API_HOST}/comments`,
      withCredentials: true,
    });

export function getAllComments() {
    return CommentService.get(`/all`)
  };