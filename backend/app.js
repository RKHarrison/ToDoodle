const express = require('express')
const port = 3000
const cors = require('cors')
const todoodle = express()

const todos = [
    {
        title: 'Todoodle 1',
        bodyText: 'Here is your todoodle',
    },
    {
        title: 'Todoodle 2',
        bodyText: 'Here is your todoodle',
    },
    {
        title: 'Todoodle 3',
        bodyText: 'Here is your todoodle',
    }
]

// This allows you to access endpoints from another server
todoodle.use(cors)

todoodle.get('/todos', (_, res) => {
    res.send(todos)
})

todoodle.get('/todos/:index', (req, res) => {
    const index = req.params.index
    res.send(todos[index])
})

todoodle.listen(port, () => {
    console.log(`listening on port ${port}`)
})
