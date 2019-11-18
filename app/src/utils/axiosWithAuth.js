  import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token')

    return axios.create({
        baseURL: '',
        headers: {
            Authorization: token
        }
    })
}