import { result } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ResumeService from '../../services/cv/resumeService';
import { Card, Icon } from 'semantic-ui-react'


export default function ResumeDetail() {

    let { id } = useParams()

    const [resumes, setResumes] = useState([])

    useEffect(() => {
      let resumeService = new ResumeService()
      resumeService.getAll.then(result => setResumes(result.data.data))
    })
    
    return (
      <div>
 qqq
      </div>
    )



}