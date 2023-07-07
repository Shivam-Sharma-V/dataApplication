const express = require('express');
const app = express();
const bcrypt =require('bcryptjs');
const multer = require('multer');
const PORT = process.env.PORT || 8080;
const cors = require('cors');
require('./db/config');
const User = require('./db/user');
app.use(express.json());

app.use(cors());


app.use('/profile',express.static('public/upload'))

const upload = multer({
    storage : multer.diskStorage({
        destination : function (req,file,cb){
            cb(null,'../client/sipltask/public/upload')
        },
        filename : function(req,file,cb){
            cb(null,Date.now()+'.jpg')
        }
    })
}).single('image')



app.post('/register',upload,async(req,resp)=>{
    const data = {
        ...req.body,
        "image" : req.file.filename
    }
    let user = new User(data);
    let result =await user.save();
    result = result.toObject();
    resp.send(result);
})

app.get('/data',async(req,resp)=>{
    let result = await User.find();
    resp.send(result);
})

app.delete('/data/:id',async(req,resp)=>{
    let result = await User.deleteOne({_id:req.params.id});
    resp.send(result);
})

app.put('/data/:id',async(req,resp)=>{
    let result = await User.updateOne({_id:req.params.id},{$set:req.body});
    resp.send(result);
})

app.post('/login',async(req,resp)=>{
    const email = req.body.email
    const password = req.body.password
      const userEmail =  await User.findOne({email:email})
      if(!userEmail){
        console.log('user not found')
      }else{
         // console.log(userEmail.password)
      const ismatch =await bcrypt.compare(password,userEmail.password)
      //  console.log(ismatch)
        if(ismatch){
       resp.send(ismatch)
        }else{
          console.log('Your Email and password is wrong')
        }
      }
   

})

app.listen(PORT,()=>{
    console.log('Server Started at Port = ',PORT)
})