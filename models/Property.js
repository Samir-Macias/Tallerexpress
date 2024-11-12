import { Schema, model } from "mongoose";


let collection = 'properties'
let schema = new Schema ({
    name: {type: String, required: true },
    type: {type: String, required: true},
    value: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'users', required: true}
   
},{
    timestamps: true
})

let Property = model(collection, schema)
export default Property