import axios from "axios";

export default class ResumeService {
    getAll() {
        return axios.get("http://localhost:8080/api/cv/getall");
    }

    getAllByCandidateId(id) {
        return axios.get("http://localhost:8080/api/cv/getAllByCandidateId?candidate=" + id)


    }
}
