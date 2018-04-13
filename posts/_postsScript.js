var tituloBody = [];

function loadPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var posts = JSON.parse(this.responseText); // var 'posts' recebe todo o arquivo transformado do JSON para javaScript;
            var postsHtml = document.getElementById('comentarios'); // var 'postsHtml' recebe todo o conteúdo do elemento 'posts';
            var imagens = loadImages(); // var 'imagens' recebe todas as imagens da função 'loadImages()';

            var tituloHead = document.createElement('h1');
            tituloHead.classList.add("postsHead");
            tituloHead.innerHTML = "Posts Page";
            postsHtml.appendChild(tituloHead);
            
            for (var i = 0; i < posts.length; i++) {
                var post = posts[i]; 
                tituloBody.push({'numero' : i,'titulo' : post.title,'body' : post.body});
                //console.log('teste', tituloBody[i]);
                var index = Math.floor((Math.random() * 100) + 1);
                var areaPost = document.createElement('div');

                areaPost.innerHTML = "<img class='imagePost' src='http://placehold.it/750x300' alt='Card image cap'></img>";
                areaPost.classList.add("bloco1");
                //var dtHtml = document.createElement('dt');
                //dtHtml.innerHTML =  "<img src='" + imagens[index] + "' style='width:50px; height:50px; border-radius:50px;'></img>";//"Usuário: " + post.id;
                //areaPost.appendChild(dtHtml);
                var ddTitulo = document.createElement('h2');
                ddTitulo.innerHTML = "<span>Título:</span> " + post.title + ".";
                areaPost.appendChild(ddTitulo);
                var ddPost = document.createElement('p');
                ddPost.innerHTML = post.body + ".";
                areaPost.appendChild(ddPost);
                var botao = document.createElement("a");
                botao.setAttribute('id', 'btnLeiaMais');
                botao.innerHTML = "<button id='leiaMais' type='button'>Leia Mais &rarr;</button>";
                botao.setAttribute('href', 'http://127.0.0.1:5500/comentarios.html');
                botao.addEventListener("click", function() {});//redirecionamento(post.title, post.body);});
                areaPost.appendChild(botao);
                var footerPost = document.createElement('div');
                footerPost.setAttribute('id', 'footerPost');
                footerPost.innerHTML = "Postado em Janeiro 1, 2018 por " + '"Usuário"';
                areaPost.appendChild(footerPost);
                postsHtml.appendChild(areaPost);
                
            }
            //console.log('teste', tituloBody);
        }				
    };
    
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function loadImages() {
    var xhttp = new XMLHttpRequest();
    var images = [];
    xhttp.onreadystatechange = function() {
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

function formularios() {
    var mensagem = document.getElementById('mensagem').value;
    var nome = document.getElementById('nome').value;
    var comentarios = [];

    comentarios.push({"msg":mensagem,"title":"testando","user":nome});
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: null,
            user: nome,
            body: mensagem,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))

    for (var i = 0; i < comentarios.length; i++) {
        var areaComent = document.createElement('div');
        areaComent.setAttribute('style', 'width:900px;');
        var imagem = document.createElement('img');
        imagem.setAttribute('src', 'http://placehold.it/50x50');
        imagem.setAttribute('style', 'width:50px;height:50px;float:left;border-radius:70px;margin-right:15px;');
        areaComent.appendChild(imagem);
        var comentario = document.createElement('div');
        comentario.setAttribute('style', 'width:835px;margin-left:65px;');
        var titulo = document.createElement('h5');
        titulo.setAttribute('style', 'text-align:left;margin:0px;margin-top:20px;');
        titulo.innerHTML = comentarios[i].user;
        comentario.appendChild(titulo);
        var body = document.createElement('p');
        body.setAttribute('style', 'text-align:justify;margin-top:0px;margin:0px;');
        body.innerText = comentarios[i].msg;
        comentario.appendChild(body);
        areaComent.appendChild(comentario);
        var postagem = document.getElementById('postagem');
        postagem.appendChild(areaComent);
    }
}

function redirecionamento() {
    var teste = []; teste = tituloBody;
    console.log('teste', teste);
    var t = document.getElementById('tituloPost');
    t.innerText = tituloBody[1].titulo;
}

function postContato() {
    var nome = document.getElementById('uNome').value;
    console.log('teste',nome);
    var email = document.getElementById('uEmail').value;
    var textArea = document.getElementById('uTextArea').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            user : nome,
            title : email,
            body : textArea
        }),
        headers: {
            'Content-type' : 'Application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))

    nome.value = "";
    email.value = "";
    textArea.value = "";
}