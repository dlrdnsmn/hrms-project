import axios from './axios/axios'

export default class workingTimeService {
    getAll() {
        return axios.get("http://localhost:8080/api/workingstime/getall");
    }
}