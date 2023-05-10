import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

    const {detail} = useParams();
    return (
        <div>
            <h1> Project Detail</h1>
            Specifications: {detail}
        </div>
    );
};

export default ProjectDetail;