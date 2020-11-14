const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"],
    },
    url: {
        type: String,
        required: true
    },
    treasureChests:{
        type: Number,
        
        required:true
    },
    phrase:{
        type:String,
        required: true
    },
    position:{
        type:String,
        
    },
    pegLeg:{
        type: Boolean,
        required: true,
        default:false,
    },
    eyePatch:{
        type: Boolean,
        required: true,
        default:false,
        
    },
    hookHand:{
        type: Boolean,
        required: true,
        default:false,
    },
}, { timestamps: true })

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);