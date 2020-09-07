require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f3204cf7265a93aac649380').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f32d2757e560d0c24aca396').then((count) => {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})
