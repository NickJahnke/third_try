import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect,useState} from 'react';

const Update = ({id, updatePirate}) =>{
    const [name, setName] = useState("")
    const[url, setUrl] = useState("")
    const[treasureChests, setTreasureChests] = useState(0)
    const[phrase, setPhrase] = useState("")
    const[position, setPosition] = useState("")
    const[pegLeg, setPegLeg] = useState(false)
    const[eyePatch, setEyePatch] = useState(false)
    const[hookHand, setHookHand] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:4000/pirates/${id}`)
            .then(res=>{
                console.log(res);
                setName(res.data.name);
                setUrl(res.data.url);
                setTreasureChests(res.data.treasureChests);
                setPhrase(res.data.phrase);
                setPosition(res.data.position);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
                
            })
            .catch(err=>{
                console.log(err)
                })
    },[]);

    const submitHandler = (e) =>{
        e.preventDefault();
    

    axios.put(`http://localhost:4000/pirates/${id}`, /*add other properties*/{name:name, url:url, treasureChests: treasureChests,phrase: phrase,position: position, pegLeg: pegLeg, eyePatch:eyePatch,hookHand:hookHand})
    .then(res=>{
        console.log(res);
        updatePirate(res.data);
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
                {errors.map((val,i)=>
                    <p key = {i}>{val} </p>)}
                <form onSubmit = {submitHandler}>
                   <input type = "text" value = {name} onChange = {e=>setName(e.target.value)} />
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
                    <input name={pegLeg} type="checkbox" checked={pegLeg} onChange={e=>setPegLeg(e.target.value)} />
                    <input name={eyePatch} type="checkbox" checked={eyePatch} onChange={e=>setEyePatch(e.target.value)} />
                    <input name={hookHand} type="checkbox" checked={hookHand} onChange={e=>setHookHand(e.target.value)} />
                  
                   <input type = "submit" value = "Update" />

                    </form>
            </div>
        )

}
export default Update;