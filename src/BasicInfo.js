import React from 'react';


// Functional displas basic information
const BasicInfo = ({ person }) => {
    return (
        <div>
            <h1>My Personal Information</h1>
            <p>Name: {person.name}</p>
            <p>Number: {person.number}</p>
            <p>Date of Birth: {person.dob}</p>
        </div>
    );
};

export default BasicInfo;
