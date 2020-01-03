import React, { useState, useEffect } from 'react'
import { connection } from '../../constants/connection';

const Flow = () => {
    const [flows, setFlows] = useState();

    useEffect(() => {
        const fetchFlows = () => {
            connection.get("/flow")
                .then(response => {
                    setFlows({ jobs: response })
                })
                .catch(error => {
                    console.log(error);
                })
        }

        fetchFlows();
    })

    return (
        <div>
            <h3>Flows</h3>
            <ul>
                {flows && flows.map(flow => {
                    return (<li key={flow.id}>{flow.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default Flow;