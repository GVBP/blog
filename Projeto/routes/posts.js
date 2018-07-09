var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

// Carrega/Executa trazendo apenas o retorno da function
var Post = require('./../model/posts')();
// var User = require('./../model/users')();
// var Comment = require('./../model/comments')();
var Person = require('./../model/person')();
var Story = require('./../model/story')();


/* GET posts page */
// next referece a próxima middleware
router.get('/', function (req, res, next) {

    Person
        .findOne({ name: 'Ian Fleming' })
        .populate('stories')
        .exec(function (err, person) {
            if (err) return handleError(err);
            console.log(person);

            Story.
                find({ author: person._id }).
                exec(function (err, stories) {
                    if (err) return handleError(err);
                    console.log('The stories are an array: ', stories);
                });
        });

    Story.findOne({ title: /Casino Royale/i })
        .select('title author _id')
        .populate('author', 'name age -_id')
        .populate('fans')
        .exec(function (err, story) {
            if (err) return handleError(err);
            console.log('The author is %s', story);
            // prints "The author is Ian Fleming"

            res.json(story);
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

    var author = Person({
        _id: new mongoose.Types.ObjectId(),
        name: 'Ian Fleming',
        age: 50
    });

    var story1 = Story({
        title: 'Casino Royale',
        author: author._id
    });

    author.stories.push(story1);


    author.save(function (err) {
        if (err) return handleError(err);

        console.log('Antes da Story', author._id);
        // var story1 = Story({
        //     title: 'Casino Royale',
        //     author: author._id
        // });

        // story1.save(function (err) {
        //     if (err) return handleError(err);
        //     // thats it!
        // });

        console.log('vardepois', author);
    });

    story1.save(function (err) {
        if (err) return handleError(err);
        // thats it!
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