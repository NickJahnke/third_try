import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router'
import axios from 'axios';
import List from './List'
import Create from './Create'
import Display from './Display';
import Update from './Update';


const Main = () => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/pirates")
            .then(response => {
                //console.log(response.data);
                setPirates(response.data);
            })},[])


    //add methods (maniplulate state data)
    const addPirate = (pirate) => {
        setPirates([...pirates, pirate])
    }
    const removePirate =(id) =>{
        setPirates(pirates.filter(pirate=>pirate._id !== id));
    }
    const updatePirate = (newPirate) => {
        setPirates(pirates.map(pirate=>pirate._id === newPirate._id ? newPirate : pirate));
    }



    //the delete Pirate method is an api method
    const deletePirate = (id) =>{
        axios.delete(`http://localhost:4000/pirates/${id}`)
        .then(response=>{
            removePirate(id);
        })
    }


    return (
        <div>
            <Router>
                <List path="/pirates" pirates={pirates} deletePirate = {deletePirate}/>
                <Create path="/new" addPirate={addPirate} />
                <Display path="/show/:id" updatePirate = {updatePirate}/>
                <Update path = "/edit/:id" updatePirate = {updatePirate}/>
            </Router>



        </div>
    )
}


export default Main;