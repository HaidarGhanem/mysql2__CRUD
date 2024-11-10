const express = require('express')
const { getNotes , getNote ,setNote } = require('./database')

const app = express()
const PORT = 3000

app.get('/notes', async (req,res)=>{
    try {
        const result = await getNotes()
        res.status(200).send(result)
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/notes/:id', async (req,res)=>{
    try {
        const result = await getNote(id)
        res.status(200).send(result)
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/notes', async (req,res)=>{
    try {
        const { title , contents } = req.body
        const result = await setNote(title , contents)
        res.status(200).send(result)
    } catch (error) {
        console.log(error.message);
    }
})

app.use((err, req , res , next)=>{
    console.error(err)
    res.status(500).send('Internal Server Error')
})

app.listen(PORT,()=>{
    console.log(`server is running on PORT : ${PORT}`);
})