const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) =>{
    userModel.find({
        
    })
    .then(data =>{
         res.json(data);
    })
    .catch(err =>{
        console.log(err);
    })
})

router.get('/:id', (req, res) =>{
    var id = req.params.id;
    userModel.find({
        _id: id
    })
    .then(data =>{
         res.json(data);
    })
    .catch(err =>{
        console.log(err);
    })
})

router.post('/', (req, res) =>{
    var email = req.body.email;
    var password = req.body.password;
    var age = req.body.age;

    userModel.create({
        email: email,
        password: password,
        age: age
    })
    .then(data =>{
        res.json("Đã thêm mới thành công")
    })
    .catch(err =>{
        console.log(err)
    })
})

router.put('/:id', (req, res) =>{
    var id = req.params.id;
    var password = req.body.password;

    userModel.findByIdAndUpdate(id, { password: password }, function(err, result){
        console.log(id);
        console.log(password);

        if(err){
            console.log(err)
        }
        else{
            res.json('DONE')
        }
    })
})

router.delete('/:id', (req, res) =>{
    var id = req.params.id;
    
    userModel.findByIdAndRemove(id, function(err, result){
        if(err){
            console.log(err)
        }
        else{
            res.json('DONE')
        }
    })
})

module.exports = router;