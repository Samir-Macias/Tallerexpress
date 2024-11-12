import { Schema, model } from "mongoose"

let collection = 'users'
let schema = new Schema ({
    name: {type: String, required: true },
    email: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    password: {type: String, required: true}, 
    online:{type: Boolean, required: true}
},{
    timestamps: true
})

let User = model(collection, schema)
export default User