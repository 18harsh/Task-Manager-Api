// /Users/harsh/mongodb/bin/mongod.exe --dbpath=/Users/harsh/mongodb-data

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
// console.log(id.getTimestamp())
console.log(id.toHexString().length)

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f3122052a443f0de04f176a")
    // }, {
    //         $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('users').findOne({_id: new ObjectID("5f3140f5f9cd4a022c8e8f60") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age: 27 }).toArray(( error, users )=> {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 27 }).count(( error, count )=> {
    //     console.log(count)
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'raj',
    //     age: 22
    // }, (error,result) => {
    //         if (error) {
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error,result) => {
    //         if (error) {
    //             return console.log('Unable to insert document!')
    //         }
    //         console.log(result.ops)
    // })
// })