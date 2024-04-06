const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: number,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
    },
    task:{
        type:String,
        default:''
    }
}
    ,{
        timestamps: true
    }
)
const userModel = mongoose.model("todolists", userSchema)
module.exports = userModel