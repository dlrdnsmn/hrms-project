import axios from "axios";

export default class Education{

    getEducations(){
        return axios.get("http://localhost:8080/api/educations/getall");
    }

}