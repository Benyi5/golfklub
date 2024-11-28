import express, { Router } from 'express';
const app = express();
export const route = express.Router();
route.get('/', function(req, res) {
    res.send("");
});
route.get('/golf/jelenlet', function(req, res) {
    console.log(req.body);
    res.send("Az összes látogatás");
});
route.get("/:uazon", (req, res) => {
    console.log(req.body);
    res.send("Egy adott ugyfel látogatasa");
});
route.post("/:uazon", (req,res) => {
    console.log(req.body);
    res.send("sikeres belépés");
});
route.patch('/:uazon', function(req, res) {
    console.log(req.body);
    res.send("Sikeres kilépés");
});



//module.exports=route; 
export default route;

