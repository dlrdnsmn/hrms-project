import axios from "axios";

export default class TechonlogyService {

    getTechonology(){
        return axios.get("http://localhost:8080/api/techonologys/getall")
    }


}