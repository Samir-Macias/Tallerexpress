import { Schema, model } from "mongoose";


let collection = 'registrations'
let schema = new Schema ({
    date: {type: Date, required: true},
    description: {type: String, required: true},
    value: {type: Number, required :true},
    active: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'users', required: true}
},{
    timestamps: true
})

let Registration = model(collection, schema)
export default Registration