import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios'



const AllQuotes = () => {
    const [allQuotes, setAllQuotes] = useState([])



    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes/all")
            .then(alldata => {
                console.log("***************")
                console.log(alldata)
                console.log("***************")
                setAllQuotes(alldata.data.results)

            })
            .catch()


    }, [])


    return (
        <div>
            <h4>Here are all the quotes!</h4>
            {
                allQuotes.map((quoteObj, idx)=>{
                    return <div key = {idx} style = {{border:"1px solid black"}}>
                        <h1>Quoted by: {quoteObj.quotedBy} </h1>
                        <p>Quote: {quoteObj.content}</p>

                        <button><Link to={`/quotes/info/${quoteObj._id}`}>More details</Link></button>
                    
                    </div>
                })
            }
        </div>
    );
};


export default AllQuotes;