const express = require('express')
const app = express()
const port = 3000;
const router = require('./routers/index')
var cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', router)

app.listen(port, () => {
//   console.clear();
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;