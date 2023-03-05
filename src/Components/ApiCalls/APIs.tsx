import axios from "axios";

const Endpoint = "https://api-augustine-blog.onrender.com"


// Search by tittle endpoints:
export const SearchTittle = async({blogname}: any) =>{
  return await axios.post(`${Endpoint}/search-for-blog-post?blogname=${blogname}`).then((res) => res.data)
}

// Get all blog post:
export const GetAllBlogPost = async() =>{
  return await axios.get(`${Endpoint}/api/blog/all-blog-posts`).then((res) => res.data)
}