import React , {useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const SpecificQuote = (props) => {
    console.log("logging the id of the quote", props.quoteid)

    const [quoteInfo, setQuoteInfo] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.quoteid}`)
        .then(response => {
            console.log("************")
            console.log(response)
            console.log("************")
            setQuoteInfo(response.data.results)

        })
        .catch(err=> console.log(err))

    }, [])


    const deleteQuote = (e, quoteID )=>{
        console.log("TRYNA DELETE THE QUOTE!!", quoteID)
        axios.delete(`http://localhost:8000/api/quotes/delete/${quoteID}`)
            .then(response=> {
                console.log("deleted!")
                console.log(response)
                console.log("deleted!")
                navigate("/quotes")

            })
            .catch(err=> console.log(err))
    }
    

    return (
        <div>
            <h1>Details about specific quote</h1>
            {quoteInfo==null? <h1>No matching quotes found</h1>:
            <> 
             <p>Quoted by: {quoteInfo.quotedBy}</p>
             <p>Quote: {quoteInfo.content}</p>
             <p>Quoted on this date: {quoteInfo.quotedOn}</p>
             <button onClick={(e)=> deleteQuote(e, quoteInfo._id )}>Delete Quote</button>
             </>
            }
           

        </div>
    );
};


export default SpecificQuote;