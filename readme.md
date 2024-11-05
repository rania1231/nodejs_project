tuto node js & express js
*****************How to create a server in node js*******************
1-create a folder 
2- npm init
	-select the name of the file that you will create you server in it example server.js
	-select your name as an author
	->you will find a application.json file that is added
3-create in the same level of the json file add server.js
4-in the file server.js 
	-const http=require('http') //this is a const variabke that stockts the bib that enables us to create a server
	-const server =htpp.createServer((req,res)=>{ 
						if(req.url=='/home') {res.statusCode=200;res.write('Welcome our home page')}
						else {res.statusCode=404;res.write('No found')}	
						res.end()
							})
	-server.listen(5000,()=>{console.log('server running ')})
5- to test, go to the terminal and write: node server.js   // and if you want that the server continue listenging even with modification write: nodemon 

********************How to install express js to your project******************
1-npm install express --save
//express js is a more easy way to create a server and use it
