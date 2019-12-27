import React, { useEffect, useState } from 'react'
import { connection } from '../../constants/connection';

const Job = (props) => {
    const [jobs, setJobs] = useState();

    useEffect(() => {
        const fetchJobs = () => {
            connection.get("/jobs")
                .then(response => {
                    this.setState({ toDoList: response })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    });
}

export default Job;