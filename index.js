

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res)=>{
    res.send('Welcome to visit my')
})

app.listen(port, () =>{
    console.log(`Our server is run to: ${port}`)
})


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })