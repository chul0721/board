export default function(app:any) {
    app.get('/',function(req:any,res:any){
        res.render('../views/index.html');
    });
    app.get('/join',function(req:any,res:any){
        res.render('../views/join.html');
    });
}