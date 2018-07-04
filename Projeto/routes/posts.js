var ObjectId = require('mongoose').Types.ObjectId;
var express = require('express');
var router = express.Router();

// Carrega/Executa trazendo apenas o retorno da function
var Post = require('./../model/posts')();
var User = require('./../model/users')();
var Comment = require('./../model/comments')();
var Person = require('./../model/person')();
var Story = require('./../model/story')();
var Carro = require('./../model/carro')();


/* GET posts page */
// next referece a próxima middleware
router.get('/', function (req, res, next) {

    console.log('teste', Post);

    Story.findOne({ title: 'Casino Royale' })
        .populate('author')
        .exec(function (err, story) {
            if (err) return handleError(err);
            console.log('The author is %s', story);
            // prints "The author is Ian Fleming"

            res.json(story.author.name);
        });

    // Post.find(null, function (err, posts) {
    //     if (err) throw err;
    //     res.json(posts);
    //     // res.render('posts', { title: 'Postagens', posts });
    // });
});

/* GET posts/:id -> comments */
router.get('/:id', function (req, res) {
    var id = req.params.id;

    Post.findOne({ "_id": id })
        .populate('user comments')
        .exec(function (err, post) {
            if (err) throw err;
            res.json(post);
        });

    // res.render('comments', { title: "Comentários", doc });
});

router.get('/new/user', function (req, res, next) {

    var author = new Person({
        _id: new ObjectId(),
        name: 'Ian Fleming',
        age: 50
    });

    author.save(function (err) {
        if (err) return handleError(err);

        var story1 = new Story({
            title: 'Casino Royale',
            author: author._id    // assign the _id from the person
        });

        story1.save(function (err) {
            if (err) return handleError(err);
            // thats it!
        });

        var carro1 = new Carro({

            carro: "Audi",
            year: "2018",
            dono: author._id
        });

        carro1.save(function (err) {
            if (err) return handleError(err);
            // thats it!
        });

        console.log('vardepois', author);
    });

    /*
        var user = new User({
    
            _id: new ObjectId(),
            name: "Guilherme",
            username: "gvbp",
            email: "guilherme@blog.com.br",
            geo: { lat: "0", lng: "0" },
            phone: "00000-0000",
            password: "teste"
        });
    
        user.save(function (err) {
            if (err) throw err;
    
            var data = new Date()
    
            var post1 = new Post({
    
                _id: new ObjectId(),
                userId: user._id,
                Featured: true,
                title: "Postagem teste",
                body: "Texto teste",
                date: { day: data.getDate(), month: (data.getMonth() + 1), year: data.getFullYear() },
                imgPost: "0"
            });
    
            var comment1 = new Comment({
    
                _id: new ObjectId(),
                postId: post1._id,
                emailUserId: user._id,
                body: String,
            });
        });
    
        Post.findOne({ title : 'Postagem teste' })
            .populate('users comments')
            .exec(function (err, post) {
                console.log('teste', post.user.title);
            });
    */
    res.redirect('/posts');
});

module.exports = router;