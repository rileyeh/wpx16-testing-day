let express = require('express')
let app = express()
app.use(express.json())
const port = 5000

const ctrl = require('./controllers/toDoController')

app.get('/api/todos', ctrl.readToDos)

app.listen(port, () => {
    console.log(`up and running on port ${port}`)
})