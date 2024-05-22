import axios from "axios"

export const listMovie = async () => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` }
      };

    const list = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?page=1`, config)
    return list.data.results
}

export const searchMovie = async (param) => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` }
      };

    const res = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${param}&page=1`, config)
    return res.data
} 