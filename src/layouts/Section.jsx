import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertList from "../pages/Job/JobAdvertList";
import JobPositionList from "../pages/Job/JobPositionList";
import EmployerList from "../pages/User/EmployerList";
import CandidateList from '../pages/User/CandidateList';

export default function Section() {
    return (
        <div>
             <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <CandidateList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobPositionList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
        </div>
    )
}
