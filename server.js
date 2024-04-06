const express = require('express')
const app = express()
const dbConnect = require('./dbConnect')
const port = 5000;
const userRoute = require('./src/apiRequest.js')
const bodyParser = require('body-parser')

app.use(express.json())
app.use('/api/items', userRoute);
app.get('/', (req, res) => res.send('helfeflo'))
app.listen(port, () => console.log(`Server is running on port ${port}`));
