import axios from "axios"

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdverts")
    }
    getOpenJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getActiveJobAdverts")
    }
    getJobAdvertsForCompanyName(){
        return axios.get("http://localhost:8080/api/jobadverts/getJobAdvertsForCompanyName")
    }
}