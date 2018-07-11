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
        body: "Sed hendrerit. Nullam tincidunt adipiscing enim. Proin faucibus arcu quis ante. Praesent venenatis metus at tortor pulvinar varius. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla facilisi. Praesent ut ligula non mi varius sagittis. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Quisque id odio. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Phasellus dolor. Fusce ac felis sit amet ligula pharetra condimentum. Phasellus accumsan cursus velit. Praesent turpis. Curabitur vestibulum aliquam leo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. In hac habitasse platea dictumst. Fusce a quam. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Vivamus elementum semper nisi.. Curabitur suscipit suscipit tellus.",
        date: { day: dia, month: mes, year: ano },
        imgPost: ""
    });
    // console.log('dia', dia + 'mes' + mes + 'ano' + ano);
    // console.log('dia ', post.date.day + 'mes ' + post.date.month + 'ano ' + post.date.year);

    var b = post.body;
    var prev = str(b);
    
    function str(b) {
        var s = "";
        for (var i = 0; i <= 200; i++) {
            s += b.charAt(i);
        }
        s += "...";
        return s
    }

    post.previous = prev;

    user.posts = user.posts.concat([post]);
    // user.posts.push(post);

    var comment = new Comment({
        _id: new ObjectId(),
        postId: post._id,
        emailUserId: user._id,
        body: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. In auctor lobortis lacus. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero."
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