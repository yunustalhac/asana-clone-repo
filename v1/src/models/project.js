const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: String,
    // user_id: {
    //     type: Mongoose.Types.ObjectId,
    //     ref: "user"
    // }
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model("project", projectSchema)