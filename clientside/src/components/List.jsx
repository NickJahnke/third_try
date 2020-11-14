import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router'

const List= ({pirates,deletePirate}) => {
    
    const navToEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    
    return(
        <div>
            <Link to = {"/new"}>List new pirate!</Link>
            {
                pirates.sort(((a, b) => a.name.localeCompare(b.name)))
                .map((pirate, idx) =>
                    <div key={idx}>
                        <p>Pirate name: <Link to={`/show/${pirate._id}`}>{pirate.name}</Link></p>
                        <p>Pirate URL: {pirate.url}</p>
                        <p>Pirate chests: {pirate.treasureChests}</p>
                        <p>Pirate phrase: {pirate.phrase}</p>
                        <p>Pirate position: {pirate.position}</p>
                        <p>Peg Leg: {pirate.pegLeg.toString()}</p>
                        <p>Eye Patch: {pirate.eyePatch.toString()}</p>
                        <p>Hook Hand: {pirate.hookHand.toString()}</p>
                        
                       
                        <button onClick = {e => navToEdit(pirate._id)}>Edit</button>
                        <button onClick = {e => deletePirate(pirate._id)}>Delete</button>

                    </div>
                )
            }
        </div>
    )
}
export default List; 