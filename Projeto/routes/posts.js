var ObjectId = require('mongoose').Types.ObjectId;
var express = require('express');
var router = express.Router();

// Carrega/Executa trazendo apenas o retorno da function
var Post = require('./../model/posts')();
var User = require('./../model/users')();
var Comment = require('./../model/comments')();


/* GET posts page */
router.post('/', function (req, res, next) {

    var user = new User({
        _id: new ObjectId(),
        name: "Guilherme",
        username: "gbvp",
        email: "gvbp@teste.com",
        geo: { lat: "00", lng: "00" },
        phone: "00000-0000",
        password: "123",
        admin: true
    });

    var data = new Date();
    // console.log('new date',data);
    dia = data.getDate();
    mes = (data.getMonth() + 1);
    ano = data.getFullYear();

    var post = new Post({
        _id: new ObjectId(),
        userId: user._id,
        Featured: true,
        title: "Casino Royale",
        body: "would be fantastic, even though I can understand that project priorities are on Mongo. Sadly Microsoft seem to have implemented just a fair subset of the latest Mongo API (3.x), so deprecated stuff that comes from 2.x may not work.",
        date: { day: dia, month: mes, year: ano },
        imgPost: ""
    });
    // console.log('dia', dia + 'mes' + mes + 'ano' + ano);
    // console.log('dia ', post.date.day + 'mes ' + post.date.month + 'ano ' + post.date.year);

    user.posts = user.posts.concat([post]);
    // user.posts.push(post);

    var comment = new Comment({
        _id: new ObjectId(),
        postId: post._id,
        emailUserId: user._id,
        body: "In 4.6.4 you'll be able to use the usePushEach option in schemas: new Schema({ arr: [String] }, { usePushEach: true });"
    });

    user.comments = user.comments.concat([comment]);
    post.comments = post.comments.concat([comment]);
    // user.comments.push(comment);
    // post.comments.push(comment);

    user.save(function (err) {
        if (err) throw err;
        console.log('User save!');
    });


    post.save(function (err) {
        if (err) throw err;
        console.log('Post save!');
    });

    comment.save(function (err) {
        if (err) throw err;
        console.log('Comment save!');
    });

    res.redirect('/posts');
});

// next referece a próxima middleware
router.get('/', function (req, res, next) {

    Post
        .find(null)
        .populate('userId')
        .populate('comments')
        .exec(function (err, posts) {
            if (err) throw err;
            // res.json(posts);
            res.render('posts', { title: 'Postagens', posts });
        });
});

/* GET posts/:id -> comments */
router.get('/:id', function (req, res) {
    var id = req.params.id;

    Post.findOne({ "_id": id })
        .populate('userId')
        .populate('comments')
        .exec(function (err, post) {
            if (err) throw err;
            // res.json(post);
            console.log('Post', post);
            res.render('comments', { title: "Comentários", post });
        });

});

module.exports = router;