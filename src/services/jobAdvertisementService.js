import axios from "axios";

export default class JobAdvertisementService{

    getJobAdvertisements(){
      return  axios.get("http://localhost:8080/api/jobadverts/getJobAdverts");
    }

    getJobAdvertisementById(id){
      return axios.get(`http://localhost:8080/api/jobadvertisement/findAllById?id=${id}`)
    }


    getJobAdvertisementTableDto(){
      return axios.get("http://localhost:8080/api/jobadvertisement/getByJobAdversitementTableDto")
    }

    postJobAdvertisement(obj){
      return axios.post('http://localhost:8080/api/jobadvertisement/add',obj, {
        headers: {
            'Content-Type': 'application/json',
            
        }
    })
    }

  getJobAdvertisementsEnableFalse(){
  return axios.get("http://localhost:8080/api/jobadvertisement/getByJobAdversitementEnableFalse");
  }

  putJobAdvertisementEnable(id){
      return axios.put(`http://localhost:8080/api/jobadvertisement/setEnable?id=${id}`)
  }


}