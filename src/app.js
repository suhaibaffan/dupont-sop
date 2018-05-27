import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

app.get( '/', ( req, res ) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});
