import express from 'express'

async function bootstrap(){
    const app = express()

    const port = 4953

    app.listen(port,()=>console.log('SERVER IS RUNNING ON PORT 4953'))
}