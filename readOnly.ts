import * as express from 'express';
import router from '../router/main';

let app, port:number, server;
app = express();
port = 2021;
router(app);

app.set('../views', __dirname + '../views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('../public', express.static('../public'));
app.use('../src', express.static('../src'));

server = app.listen(port, () => {
    console.log(`Server on : ${port}`);
})
