import axios from "axios";

const Endpoint = "https://api-augustine-blog.onrender.com"

// Search by tittle endpoints:
export const SearchTittle = async() =>{
  await axios.get(`${Endpoint}/search-for-blog-post`)
}