var express = require('express');
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Blog' });
});

/* GET load users */
router.get('/loadUsersJson', function (req, res, next) {

  (function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var users = JSON.parse(this.responseText); // var 'users' recebe todo o arquivo transformado do JSON para javaScript;

        var myObj = [];
        for (var i = 0; i < users.length; i++) {
          var user = users[i];

          // Variaveis do users
          var _id = i;
          var name = user.name;
          var username = user.username;
          var email = user.email;
          var address = user.address.geo;
          var phone = user.phone;
          var password = '';
          // Fim das variaveis

          myObj.push({ _id, name, username, email, address, phone, password });          
        }

        console.log(myObj);

        global.db.usersMongo(myObj, (err, result) => {
          if (err) throw err;
          console.log('1 document inserted');
        });
      }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

  })()

  res.redirect('/');
});

/* GET load posts */
router.get('/loadPostsJson', function (req, res, next) {

  (function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var posts = JSON.parse(this.responseText); // var 'posts' recebe todo o arquivo transformado do JSON para javaScript;

        var myObj = [];
        for (var i = 0; i < posts.length; i++) {
          var post = posts[i];

          // Variaveis do post
          var userId = post.userId;
          var _id = post.id;
          var Featured = true;
          var title = post.title;
          var body = post.body;
          // Data
          var date = new Date();
          var dateDay = date.getDate();
          var dateMonth = date.getMonth() + 1;
          var dateYear = date.getFullYear();
          // Fim data
          date = { dateDay, dateMonth, dateYear };
          username = '';
          // Fim das variaveis

          myObj.push({ userId, _id, Featured, title, body, date, username });          
        }

        console.log(myObj);

        global.db.postsMongo(myObj, (err, result) => {
          if (err) throw err;
          console.log('1 document inserted');
        });
      }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

  })()

  res.redirect('/');
});

/* GET load comments */
router.get('/loadCommentsJson', function (req, res, next) {

  (function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var comments = JSON.parse(this.responseText); // var 'users' recebe todo o arquivo transformado do JSON para javaScript;

        var myObj = [];
        for (var i = 0; i < comments.length; i++) {
          var comment = comments[i];

          // Variaveis do users
          var postId = comment.postId;
          var _id = comment.id;
          var username = '';
          var email = comment.email;
          var body = comment.body;
          var photo = '';
          // Fim das variaveis

          myObj.push({ postId, _id, username, email, body, photo });          
        }

        console.log(myObj);

        global.db.commentsMongo(myObj, (err, result) => {
          if (err) throw err;
          console.log('1 document inserted');
        });
      }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

  })()

  res.redirect('/');
});

/* GET load albums */
router.get('/loadAlbumsJson', function (req, res, next) {

  (function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var albums = JSON.parse(this.responseText); // var 'users' recebe todo o arquivo transformado do JSON para javaScript;

        var myObj = [];
        for (var i = 0; i < albums.length; i++) {
          var album = albums[i];

          // Variaveis do users
          var userId = album.userId;
          var _id = album.id;
          var title = album.title;
          var url = '';
          var photo = '';
          // Fim das variaveis

          myObj.push({ userId, _id, title, url, photo });          
        }

        console.log(myObj);

        global.db.albumsMongo(myObj, (err, result) => {
          if (err) throw err;
          console.log('1 document inserted');
        });
      }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

  })()

  res.redirect('/');
});

/* GET load photos */
router.get('/loadPhotosJson', function (req, res, next) {

  (function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var photos = JSON.parse(this.responseText); // var 'users' recebe todo o arquivo transformado do JSON para javaScript;

        var myObj = [];
        for (var i = 0; i < photos.length; i++) {
          var photo = photos[i];

          // Variaveis do users
          var albumId = photo.albumId;
          var _id = photo.id;
          var url = photo.url;
          // Fim das variaveis

          myObj.push({ albumId, _id, url });          
        }

        console.log(myObj);

        global.db.photosMongo(myObj, (err, result) => {
          if (err) throw err;
          console.log('1 document inserted');
        });
      }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

  })()

  res.redirect('/');
});

module.exports = router;