const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is on port '+port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f383b731ed1b939405e4111')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f383a8407d800284c8f244d')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }
// main()


// app.use((req,res,next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

// app.use((req,res,next) => {
//     if (req.method=='GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/ )) {
//             return cb(new Error('Please upload word document'))
//         }
//         cb(undefined, true)

//         // cb(new Error('File must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })
    
// app.post('/upload',upload.single('upload'), (req, res) => {
//     res.send()
// }, (error,req,res,next) => {
//     res.status(400).send({error: error.message})
// })


// const pet = {
//     name: 'Hal'
// }
// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismytask',{expiresIn: '7 days'})
//     console.log(token)

//     jwt.verify(token, 'thisismytask')
//     console.log(data)
// }
// myFunction()