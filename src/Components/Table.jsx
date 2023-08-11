import React from 'react'
import Header from './Header';

const Table = ({ data }) => {
    console.log(data);
    return (
        <>
            <Header title={'Admin Dashboard'} />
            <div>Table</div>
            <h1>{data.first_name}</h1>
            <p>lorem500</p>
            <div className="download-options">
                <a href="#" id="download-csv">Download CSV</a>
                <a href="#" id="download-excel">Download Excel</a>
            </div>
            
        </>


    )
}

export default Table