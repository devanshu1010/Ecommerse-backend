const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: Buffer, required: true },
    role: {type: String, default: false, default: "user"},
    name: {type: String },
    salt: Buffer 
  });

const virtualId  = userSchema.virtual('id');
virtualId.get(function(){
    return this._id;
})

userSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})


exports.User = mongoose.model('User',userSchema)