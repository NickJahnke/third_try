const PirateController  = require("../controllers/pirates");

module.exports = (app) => {
    app.get("/pirates/index", PirateController.index);
    app.post("/pirates/create", PirateController.createPirate);
    app.get("/pirates", PirateController.allPirates);
    app.delete("/pirates/:id",PirateController.deletePirate);
    app.put("/pirates/:id",PirateController.editById)
    app.get("/pirates/:id",PirateController.findById)
    
}