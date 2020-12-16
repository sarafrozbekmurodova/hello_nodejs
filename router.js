const express = require("express")
const router = express.Router()
const Task = require('./models/Task')
const Post = require('./models/Post');


// // List of tasks
// router.get('/', (req, res) => {
//     Task.find({}).exec((err, tasks) => {
//         res.send(tasks)
//     })
// });

// // Create
// router.get('/create', (req, res) => {
//     res.render('create')
// })

// router.post('/create', (req, res) => {
//     var task = new Task(req.body);
//     task.save().then(item => {
//     	res.send(item)
//     })
// })

// // Single task
// router.get('/:id', (req, res) => {
//     Task.find({ _id: req.params.id }).exec((err, task) => {
//         res.send(task)
//     })
// })

// router.post('/update/:id', (req, res) => {
//     Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, task) =>{
//         res.send(task)
//     })
// })

// router.get('/delete/:id', (req, res) => {
//     Task.findOneAndDelete({ _id: req.params.id }).exec((err, task) => {
//         res.send('Task deleted');
//     })
// })



// List of posts
router.get('/', (req, res) => {
    Post.find({}).exec((err, postss) => {
        //res.send(postss)
        res.render('read_post',{posts:postss})
    })
});

// Create_post
router.get('/create_post', (req, res) => {
    res.render('create_post')
})


router.post('/create_post', (req, res) => {
    var posts = new Post(req.body);
    posts.save().then(item => {
    	res.redirect('/')
    })
})

// //List Table data
// router.get('/posts',(req,res)=>{
//     Post.find(function(err,posts) {
//         if (err) {
//             console.log(err);
//         }else{
            
//             res.render('read_post',{posts:posts})
          
       
//         }
//     })
// })


// get Single post by id 
router.get('/posts/:id', (req, res) => {
   Post.findById( req.params.id).exec((err,data)=>{
res.render('postid',data)

 
   })
        //res.render('/', req.params.id) 
})



// // Single post
// router.get('/:id', (req, res) => {
//     Post.find({ _id: req.params.id }).exec((err, posts) => {
//         res.render('display',posts)
//     })
// })


//edit single post
router.get('/edit_post/:id', (req, res) => {
    console.log(req.params.id)
    Post.findById( req.params.id).exec((err,post)=>{
        console.log(post)
 res.render('edit_post',{posts:post})
 
    })
 })

router.post('/edit_post/:id', (req, res) => {
    const postbyid={
        title:req.body.title,
        body:req.body.body,
        author_id:req.body.author_id
    }
    Post.findOneAndUpdate(req.params.id, /*$set: req.body */postbyid, (err) =>{
        res.redirect('/')
    })
})

//delete single post

router.get('/delete_post/:id', (req, res) => {
    Post.findOneAndDelete( req.params.id ).exec((err, deletedpost) => {
        res.send('post deleted');
    })
})




module.exports = router