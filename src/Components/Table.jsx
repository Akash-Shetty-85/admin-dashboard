import React from 'react';
import Header from './Header';
import UserAccordion from './UserAccordion';

const Table = ({ data }) => {
    console.log(data);
    return (
        <>
            <Header title={'Admin Dashboard'} />
           <div className='table'>
            {data.map((user, index) => (
                <UserAccordion key={index} user={user} />
            ))}
            </div>
        </>
    );
};

export default Table;
