function postContato() {
    var nome = document.getElementById('uNome').value;
    var email = document.getElementById('uEmail').value;
    var textArea = document.getElementById('uTextArea').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            user: nome,
            title: email,
            body: textArea
        }),
        headers: {
            'Content-type': 'Application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))

    document.getElementById('uNome').value = "";
    document.getElementById('uEmail').value = "";
    document.getElementById('uTextArea').value = "";
}