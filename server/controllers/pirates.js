const { response } = require('express');
const {Pirate} = require('../models/Pirate');

module.exports.index = (req,res) => {
res.json({message:"Hello world!"})
}

module.exports.createPirate = (request, response) => {
    Pirate.create(request.body)
    .then(Pirate=>response.json(Pirate))
    .catch(err=>response.status(400).json(err))
}
module.exports.allPirates = (request,response) => {
    Pirate.find()
    .then(pirates => response.json(pirates))
    .catch(err => response.json(err))
}

module.exports.deletePirate = (request,response) =>{
    Pirate.deleteOne({_id:request.params.id})
    .then(res=>{
        response.json(res);
    })
    .catch(err=>{
        console.log(err);
        response.status(400).json(err);
    })
}

module.exports.findById = (request,response) => {
    Pirate.findById(request.params.id)
    .then(pirate => {
        response.json(pirate)
    })
    .catch(err=>{
        response.status(400).json(err)
    })
}
module.exports.editById = (request,response) =>{
    Pirate.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
    .then(pirate => {
        response.json(pirate);
    }).catch(err=>response.status(400).json(err))
    
}

