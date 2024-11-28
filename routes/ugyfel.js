import express, { Router } from 'express';
const app = express();
export const route = express.Router();
route.get('/', function(req, res) {
    res.send("");
});
route.get('/:uazon', function(req, res) {
    let uazon = req.params.uazon;
    res.send(uazon + "megjelenites");
});
route.post("/register", (req, res) => {
    console.log(req.body);
    res.send("felhasználó rögzítése");
});
route.post("/golf/login", (req,res) => {
    console.log(req.body);
    res.send("sikeres belépés");
});
route.put('/:uazon', function(req, res) {
    console.log(req.body);
    res.send("Sikeres módosítás");
});
route.delete("/:uazon", (req, res) => {
    console.log(req.body);
    res.send("Sikeres törlés");
});


//module.exports=route; 
export default route;