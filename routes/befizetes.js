import express, { Router } from 'express';
const app = express();
export const route = express.Router();
route.get('/', function(req, res) {
    res.send("");
});       
route.post('/golf/befizetes', function(req, res) {
    console.log(req.body);
    res.send("");
});       
route.patch('/:bido', function(req, res) {
    console.log(req.body);
    res.send("Ügyfelek megjelenítése");
});       
route.get('/:uazon', function(req, res) {
    console.log(req.body);
    res.send("Sikeres módosítás");
});       
route.get('//golf/ugyfelek', function(req, res) {
    console.log(req.body);
    res.send("A változtatások megtörténtek");
});       

//module.exports=route; 
export default route;
