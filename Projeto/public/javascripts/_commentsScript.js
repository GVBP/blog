var mongoose = require('mongoose');


function formularios(banco) {
    


    var mensagem = document.getElementById('mensagem').value;
    var nome = document.getElementById('nome').value;
    var comentarios = [];

    comentarios.push({ "msg": mensagem, "title": "testando", "user": nome });

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
        areaComent.setAttribute('style', 'width:auto;');
        var imagem = document.createElement('img');
        imagem.setAttribute('src', 'http://placehold.it/50x50');
        imagem.setAttribute('style', 'width:50px;height:50px;float:left;border-radius:70px;margin-right:15px;');
        areaComent.appendChild(imagem);
        var comentario = document.createElement('div');
        comentario.setAttribute('class', 'container');
        var titulo = document.createElement('h5');
        titulo.setAttribute('class', 'card-title');
        titulo.innerHTML = comentarios[i].user;
        comentario.appendChild(titulo);
        var body = document.createElement('p');
        body.setAttribute('class', 'card-text');
        body.innerText = comentarios[i].msg;
        comentario.appendChild(body);
        areaComent.appendChild(comentario);
        var linha = document.createElement('hr');
        areaComent.appendChild(linha);
        var postagem = document.getElementById('postagem');
        if (comentarios[i].user != "" && comentarios[i].msg != "") {
            document.getElementById('nome').value = '';
            document.getElementById('mensagem').value = '';
            postagem.appendChild(areaComent);
        }
    }
}