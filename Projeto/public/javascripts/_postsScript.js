var tituloBody = [];

function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var posts = JSON.parse(this.responseText); // var 'posts' recebe todo o arquivo transformado do JSON para javaScript;
            var postsHtml = document.getElementById('comentarios'); // var 'postsHtml' recebe todo o conteúdo do elemento 'posts';
            var imagens = loadImages(); // var 'imagens' recebe todas as imagens da função 'loadImages()';

            for (var i = 0; i < posts.length; i++) {
                var post = posts[i];
                tituloBody.push({ 'numero': i, 'titulo': post.title, 'body': post.body });
                var index = Math.floor((Math.random() * 100) + 1);
                //----------------------------------------------
                var areaPost = document.createElement('div');
                areaPost.setAttribute('class', 'card text-center');
                var header = document.createElement('div');
                header.setAttribute('class', 'card-header');
                header.innerHTML = "Featured";
                areaPost.appendChild(header);
                var cardBody = document.createElement('div');
                cardBody.setAttribute('class', 'card-body');
                var ddTitulo = document.createElement('h5');
                ddTitulo.setAttribute('class', 'card-title');
                ddTitulo.innerHTML = "<span>" + post.title + "</span>";
                cardBody.appendChild(ddTitulo);
                var ddPost = document.createElement('p');
                ddPost.setAttribute('class', 'card-text');
                ddPost.innerHTML = post.body + ".";
                cardBody.appendChild(ddPost);
                var botao = document.createElement("a");
                botao.setAttribute('class', 'p-2 text-muted');
                botao.setAttribute('href', '/posts/comments');
                botao.setAttribute('role', 'button');
                botao.innerHTML = "Leia Mais &rarr;";
                cardBody.appendChild(botao);
                areaPost.appendChild(cardBody);
                var footerPost = document.createElement('div');
                footerPost.setAttribute('class', 'card-footer text-muted');
                footerPost.innerHTML = "Postado em Janeiro 1, 2018 por " + '"Usuário"';
                areaPost.appendChild(footerPost);
                postsHtml.appendChild(areaPost);
                var linha = document.createElement('hr');
                postsHtml.appendChild(linha);
            }
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function loadImages() {
    var xhttp = new XMLHttpRequest();
    var images = [];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(this.responseText).results;
            for (var i = 0; i < users.length; i++) {
                images.push(users[i].picture.large);
            }
        }
    };
    xhttp.open("GET", "https://randomuser.me/api/?results=100", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

    return images;
}

function moreComments() {
    var alturaAtual = document.getElementById('comentarios').clientHeight;
    var altura = soma(alturaAtual);
    document.getElementById('comentarios').style.height = altura;

    function soma(n) {
        var s = (n + 1440);
        var y = document.getElementById('comentarios').scrollHeight;
        if (s > y) {
            s = y + 'px';
        } else {
            s = s + 'px';
        }
        return s;
    };
}