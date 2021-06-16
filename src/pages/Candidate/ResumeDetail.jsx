import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ResumeService from '../../services/cv/resumeService'


export default function ResumeDetail() {

    let { id } = useParams()

    const [resumes, setResumes] = useState([])

    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getResumeCandidateId(id).then(result => setResumes(result.data.data))
    }, [])


    return (
      <div></div>
    )



}