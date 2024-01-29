// import json server
const jsonServer = require ('json-server')

const doctServer = jsonServer.create()

const router = jsonServer.router()

const middleware = jsonServer.defaults()

const port = 3001

doctServer.use(router)
doctServer.use(middleware)

doctServer.listen(port,()=>{
    console.log('server listen on port' +port);
})
