  
import React, { useEffect, useState } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import positionService from "../services/positionService";

import { NavLink } from "react-router-dom";
const jobPositionService = () => {
 

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>Menu</Menu.Item>
      <Menu.Item as={NavLink}  to="/candidateList"  name="updates">CandidatesList</Menu.Item>
      <Menu.Item as={NavLink}  to="/companyList"   name="updates">CompanyList</Menu.Item>
      <Menu.Item as={NavLink}  to="/jobAdvertisementList"  name="updates">JobAdvertisementsList</Menu.Item>
      </Menu>
    </div>
  );
};

export default jobPositionService;