import React, { useEffect, useState } from "react";
import axios from 'axios'

function List(){

    const [Data, setData] = useState([])

    const getList = async () => {
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND}/api/log/list`);
        const {result} = await data;
        setData(result);
    }

    useEffect(() => {  
        getList();
    },[])

    return(
        <div>
            <table>
            <thead>
                <tr>
                    <th> id </th>
                    <th> Start Date </th>
                    <th> End Date </th>
                    <th> Desc </th>
                </tr>
            </thead>
            <tbody>
                {
                    Data.map( l => (
                        <tr key={l.id}>
                            <td> {l.id} </td>
                            <td>{l.startDate}</td>
                            <td>{l.endDate}</td>
                            <td> {l.des} </td>
                        </tr>
                    ))
                }
            </tbody>           
            </table>
        </div>
    );
}

export default List;