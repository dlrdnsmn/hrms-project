import axios from "axios"

export default class wayOfWorkingService {
    getAllWayOfWorkings(){
        return axios.get("http://localhost:8080/api/wayOfWorkings/getall")
    }
}


