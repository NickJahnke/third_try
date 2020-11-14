import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'

const Create = ({addPirate}) => {
 const[name, setName] = useState("")
 const[url, setUrl] = useState("")
 const[treasureChests, setTreasureChests] = useState(0)
 const[phrase, setPhrase] = useState("")
 const[position, setPosition] = useState("")
 const[pegLeg, setPegLeg] = useState(false)
 const[eyePatch, setEyePatch] = useState(false)
 const[hookHand, setHookHand] = useState(false)
 

const [errors, setErrors] = useState([])

const submitHandler = (event) =>
{
    event.preventDefault();


const newPirate = {name: name, url:url, treasureChests: treasureChests,phrase: phrase,position: position,pegLeg:pegLeg,eyePatch:eyePatch,hookHand:hookHand}

axios.post("http://localhost:4000/pirates/create", newPirate)
.then(res => {
    addPirate(res.data); //this will add the product to the LOCAL array that lists all Pirates
    navigate("/pirates");
    
})
.catch(err=>{
const errors = err.response.data.errors;

const keys = Object.keys(errors)
const newErrors = [];

for (let i of keys) {
    newErrors.push(errors[i].message)
}
console.log(newErrors)
setErrors(newErrors);
})
}

    return(
        <div>
           

            <h1>List a new product</h1>
            
            {errors.map((val,i)=>
            <p key = {i}>{val} </p>)}
            
            <form onSubmit = {submitHandler} >
                <label>
                    Pirate name:
                    <input type = "text" value = {name} onChange = {e=>setName(e.target.value)}/>
                </label>
                <label>
                    Pirate URL:
                    <input type = "text" value = {url} onChange = {e=>setUrl(e.target.value)}/>
                </label>
                <label>
                    # treasure chests:
                    <input type = "number" value = {treasureChests} onChange = {e=>setTreasureChests(e.target.value)}/>
                </label>
                <label>
                    Pirate phrase:
                    <input type = "text" value = {phrase} onChange = {e=>setPhrase(e.target.value)}/>
                </label>
                <label>
                    Pirate position:
                    <select onChange = {e=>setPosition(e.target.value)}>
                        <option value = "Captain"> Captain </option>
                        <option value = "Deckhand"> Deckhand </option>
                        <option value = "Crow's Nest Scout"> Crow's Nest Scout </option>
                        <option value = "Deckhand"> Deckhand </option>
                        <option value = "Deckhand"> Deckhand </option>
                    </select>
                    </label>
                    <label> Peg Leg
                    <input  name = "pegLeg" type="checkbox" checked={pegLeg} onChange={e=>setPegLeg(e.target.checked)} />
                    </label>
                    <label> Eye Patch
                    <input name = "eyePatch" type="checkbox" checked={eyePatch} onChange={e=>setEyePatch(e.target.checked)}/>
                    </label>
                    <label> Hook Hand
                    <input name = "hookHand" type="checkbox" checked={hookHand} onChange={e=>setHookHand(e.target.checked)} />
                    </label>
                    
                    <input type = "submit" value = "Add Pirate!"/>
            </form>

        </div>
    )
}
export default Create;