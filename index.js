import express from 'express';
const app = express();
import dotenv from'dotenv';
dotenv.config();
import mysql from'mysql2';
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
});

connection.connect
const route = express.Router();
// egyedek feldolgozását tartalmazó fájlok
import routeUgyfel from "./routes/ugyfel";
import routeJelenlet from"./routes/jelenlet";
import routeTagsag from"./routes/tagsag";
import routeBefizetesek from"./routes/befizetes";

app.use("golf/ugyfel", routeUgyfel);
app.use("golf/jelenlet", routeJelenlet);
app.use("golf/befizetes", routeBefizetesek );
app.use("golf/tagsag", routeTagsag);
app.use("*", (req, res) => {
    res.send(404).send("Nincs ilyen");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
});