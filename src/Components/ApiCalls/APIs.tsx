import axios from "axios";

const Endpoint = "https://api-augustine-blog.onrender.com"

export interface AdminData {
  name: string;
  email: string;
  password: string;
 
}

// Search by tittle endpoints:
export const SearchTittle = async({blogname}: any) =>{
  return await axios.post(`${Endpoint}/search-for-blog-post?blogname=${blogname}`).then((res) => res.data)
}

// Get all blog post:
export const GetAllBlogPost = async() =>{
  return await axios.get(`${Endpoint}/api/blog/all-blog-posts`).then((res) => res.data)
}

// Get single blog post:
export const GetSinglePost = async(blogID: string) =>{
  return await axios.get(`${Endpoint}/api/blog/single-blog-post/${blogID}`).then((res) => res.data).catch((err)=>  err)
}

export const signUp = async(data:AdminData) =>{
  return await axios.post(`${Endpoint}/api/users/registerusers` , data).then((res)=> res.data)
}

// export const getOne = async(id:string)=>{
//   return await axios.get(`https://api-augustine-blog.onrender.com/api/blog/single-blog-post/${id}`).then((res)=> res.data).catch((err) => err)
// }

//6403e7eab8487e2c56d788fb"