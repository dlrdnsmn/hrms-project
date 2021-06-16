import React from "react";
import Positions from "./Positions";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import SetJobAdvertisement from "../pages/Employee/SetJobAdvertisement";
import JobAdvertisementList from "../pages/Job/JobAdvertisementList";
import CandidateList from "../pages/Candidate/CandidateList";
import JobAdvertisementDetail from "../pages/Job/JobAdvertisementDetail";
import ResumeDetail from "../pages/Candidate/ResumeDetail";
import JobAdversitementForm from "../pages/Job/JobAdversitementForm";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Positions />
          </Grid.Column>

          <Grid.Column width="12">
            <Route path="/CandidateList" component={CandidateList} />
            <Route path="/jobAdvertisementList" exact component={JobAdvertisementList} />
            <Route path="/jobAdvertisement/:id" exact component={JobAdvertisementDetail}/>
            <Route path="/resume/:id" component={ResumeDetail}/>
            <Route path="/jobadvertisementpost" component={JobAdversitementForm}   />
            <Route path="/setJobAdvertisement" component={SetJobAdvertisement}   />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}