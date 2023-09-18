import express from 'express';

const app = express()
const PORT = 3000;

// middleware -> before going the app routes
app.get('/', () => {
    
})

app.listen(PORT, () => {
    console.log("Today is Sunday")
})



