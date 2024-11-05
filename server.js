const http = require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.write("Welcome to our home")
    }
    else if(req.url=='/contact'){
        res.write("Welcome to our contact")
    }
    else if(req.url=='/about'){
        res.write("Welcome to our about")
    }
    else {
        res.statusCode=404
        res.write('Not found')
        
    }
    //res.write(req.url)

    res.end()
    
})

server.listen(5000,()=>{console.log("server running successfully")})
