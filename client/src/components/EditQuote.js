import React, {useState, useEffect} from 'react';
import {navigate, Router} from '@reach/router';
import axios from 'axios'




const EditQuote = (props) => {
    // const [quoteToEdit, setQuoteToEdit ]= useState({})

    const [formInfo, setFormInfo]= useState({
        quotedBy:"",
        content: "",
        quotedOn: ""
    })


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.quoteid}`)
            .then(response =>{
                console.log("*********")
                console.log(response)
                console.log("*********")
                setFormInfo(response.data.results)

            })
            .catch(err=> console.log(err))
    }, [])



   

    const changeHandler = (e)=>{
        console.log("changing this input!")
        console.log(e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }



    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("getting ready to submit this data for the update --->", formInfo)
        axios.put(`http://localhost:8000/api/quotes/update/${props.quoteid}`, formInfo)
            .then(response =>{
                console.log("JUST UPDATED!")
                console.log(response)
                console.log("JUST UPDATED!")
                navigate("/quotes")


            })
            .catch(err=> console.log("ERROR WHEN UPDATING AND SENDING PUT REQUEST!", err))
        

    }



    return (
        <div>
            <h3>Please use the form below to edit this quote: {props.quoteid}</h3>
            <form onSubmit={submitHandler}>
                <p>Quoted by: <input type="text" name="quotedBy" id="" onChange={changeHandler} value = {formInfo.quotedBy}/></p>
                <p>Quote: <textarea name="content" id="" cols="30" rows="10" onChange={changeHandler}value = {formInfo.content}></textarea></p>
                <p>Quoted On: <input type="date" name="quotedOn" id="" onChange={changeHandler} value={formInfo.quotedOn}/></p>
                <p><input type="submit" value="Submit Quote!"/></p>
            </form>
            
        </div>
    );
};


export default EditQuote;