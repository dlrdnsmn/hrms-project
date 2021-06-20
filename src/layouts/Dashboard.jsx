import React from "react";
import Positions from "../pages/JobPosition";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import SetJobAdvertisement from "../pages/Employee/SetJobAdvertisement";
import JobAdvertisementList from "../pages/Job/JobAdvertisementList";
import CandidateList from "../pages/Candidate/CandidateList";
import JobAdvertisementDetail from "../pages/Job/JobAdvertisementDetail";
import ResumeDetail from "../pages/Candidate/ResumeDetail";
import JobAdversitementForm from "../pages/Job/JobAdversitementForm";
import Filter from "./Filter";
import HomePage from "../pages/HomePage";
export default function Dashboard() {

  return (
     
     
    <Grid   >
      <Grid.Row>
        <Grid.Column >
        <Route exact path="/" component={HomePage}/>
        </Grid.Column>

    
      </Grid.Row>
        <Grid.Row>
            <Grid.Column width={6}>
             
            <Route exact path="/jobadvertisementList" component={Filter}/>
            <Route exact path="/resumeDetail" component={Filter}/>
            </Grid.Column>
           
          
            <Grid.Column  width={10}>
        
           <Route exact path="/resumeDetail" component={ResumeDetail}/>
           <Route exact path="/jobadvertisementList" component={JobAdvertisementList}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>


            
     
  
  )
}