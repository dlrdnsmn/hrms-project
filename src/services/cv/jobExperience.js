import axios from "axios";

export default class JobExperience {

    getJobExperiences(){
        return axios.get("http://localhost:8080/api/jobexperiences/getall");
    }

}