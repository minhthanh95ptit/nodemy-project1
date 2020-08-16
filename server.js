const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDB')
const path = require('path');
const userRouter = require('./routers/userRouter');
const userModel = require('./models/userModel');


app.use('/congkhai',express.static(path.join(__dirname,'/public')));

connectDB();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api/user', userRouter);

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname,'views/home.html'))
})

app.get('/login',(req, res) =>{
    res.sendFile(path.join(__dirname,'views/login.html'))
})


app.post('/login',(req, res) =>{
    var email = req.body.email;
    var password = req.body.password;

    console.log(email);
    console.log(password);

    userModel.find({
        email: email,
        password: password
    })
    .then(data =>{
        if(!data.length){
            return res.json({
                err: true,
                message: 'Tài khoản hoặc mật khẩu không tồn tại.'
            })
        }
        else{
            return res.json({
                err: false,
                message: 'Đăng nhập thành công.'
            })
        }
    })
    .catch(err =>{
        console.log(err);
    })
})


app.listen(3000, (req, res) =>{
    console.log('RUNNING...')
})