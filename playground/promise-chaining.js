require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f32017cb4a2b318d0f52c20

// User.findByIdAndUpdate('5f32017cb4a2b318d0f52c20', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})  
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}
updateAgeAndCount('5f32017cb4a2b318d0f52c20', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})