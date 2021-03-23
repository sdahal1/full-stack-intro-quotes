import React, {useState} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios';


const CreateQuote = () => {

    const [formInfo, setFormInfo]= useState({
        quotedBy:"",
        content: "",
        quotedOn: ""
    })


    const changeHandler = (e)=>{
        console.log("changing this input!")
        console.log(e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

//EVENTS YOU SHOULD KNOW FOR EXAM
// onChange-> good for form inputs
// onclick -> good for delete buttons
// onSubmit -> form submission events

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("getting ready to submit this data --->", formInfo)
        axios.post("http://localhost:8000/api/quotes/create", formInfo)
            .then(response =>{
                console.log("******* response from create api after submitting form")
                console.log(response)
                console.log("******* response from create api after submitting form")
                navigate("/quotes")

            })
            .catch(err=> console.log("ERRRORSSSS FROM API CALL-->", err))

    }


    return (
        <div>
            <h3>UPload your favorite quote below</h3>
            <form onSubmit={submitHandler}>
                <p>Quoted by: <input type="text" name="quotedBy" id="" onChange={changeHandler}/></p>
                <p>Quote: <textarea name="content" id="" cols="30" rows="10" onChange={changeHandler}></textarea></p>
                <p>Quoted On: <input type="date" name="quotedOn" id="" onChange={changeHandler}/></p>
                <p><input type="submit" value="Submit Quote!"/></p>
            </form>
        </div>
    );
};


export default CreateQuote;