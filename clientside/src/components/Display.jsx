
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'



const Display = ({id, updatePirate}) => {
    const [pirate,setPirate] = useState({
        name: "",
        url: "",
        treasureChests: 0,
        phrase: "",
        position: "",
        pegLeg: false,
        eyePatch:false,
        hookHand: false,
    });
    const [pegLeg,setPegLeg ] = useState(false)
    const [eyePatch,setEyePatch ] = useState(false)
    const [hookHand,setHookHand] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:4000/pirates/${id}`)
        .then(res=>{
            console.log(res)
            setPirate(res.data);
            
            
    })
    .catch(err=>{
        console.log(err);
    })},[])
     
    const submitHandler = (e) =>{
        e.preventDefault();
        
        axios.put(`http://localhost:4000/pirates/${id}`,{ pegLeg:pegLeg,hookHand:hookHand,eyePatch:eyePatch})
        .then(res=>{
            console.log(res);
            updatePirate(res.data);
            
        })}


    

        
    
    
    
    return(
        <div>
            <p>Pirate name: {pirate.name}</p>
            <p>Pirate URL: {pirate.url}</p>
            <p>Pirate chests: {pirate.treasureChests}</p>
            <form onSubmit = {submitHandler} >  
            <p>Pegleg = {pirate.pegLeg.toString()}</p>
            <p>Hook hand = {pirate.hookHand.toString()}</p>
            <p>Eye patch = {pirate.eyePatch.toString()}</p>
                    <label> Peg Leg
                    <input  name = "pegLeg" type="checkbox"  onChange={e=>setPegLeg(e.target.checked)} />
                    </label>
                    <label> Eye Patch
                    <input name = "eyePatch" type="checkbox"  onChange={e=>setEyePatch(e.target.checked)}/>
                    </label>
                    <label> Hook Hand
                    <input name = "hookHand" type="checkbox"  onChange={e=>setHookHand(e.target.checked)} />
                    </label>
                    <input type = "submit" />
            </form>
            
            <p>Pirate phrase: {pirate.phrase}</p>
            <p>Pirate position: {pirate.position}</p>
            
            <Link to = {'/pirates'}>Home</Link>
        </div>
    )
            }

export default Display;