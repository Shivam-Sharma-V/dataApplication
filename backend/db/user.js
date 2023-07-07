const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    stName : {
        type : String,
        required : true,
    },
    fname : {
        type : String,
        required : true
    },
    "mname" : String,
    "date" : String,
    "mobile" : Number,
    "gender" : String,
    "email" : String,
    "password" : String,
    "department" : String,
    "image" : String
})

userSchema.pre('save', async function(){
    if(this.isModified('password')){
        console.log(this.password);
        this.password = await bcrypt.hash(this.password,10)
        console.log(this.password);
    }
})


module.exports = mongoose.model('Record',userSchema);