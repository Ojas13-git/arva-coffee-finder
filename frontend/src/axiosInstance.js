import axios from "axios"

 const axiosInstance = axios.create({
    baseURL: "http://13.127.31.253:5000",
    headers: {
        secretkey: "pikachu", accesskey: "pokemon"
    }
})

export default axiosInstance