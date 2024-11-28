import express, { Router } from 'express';
const app = express();
export const route = express.Router();
route.get('/', function(req, res) {
    res.send("");
});         
route.post("/:uazon/:tszint", (req, res) => {
    console.log(req.body);
    res.send("Tagsági szint módosult");
});
route.get("/:uazon", (req, res) => {
    console.log(req.body);
    res.send("Adott tag tagságai változtak");
});

//module.exports=route; 
export default route;
