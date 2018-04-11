<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<p id="demo">Let AJAX change this text.</p>

<button type="button" onclick="loadDoc()">Change Content</button>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      console.log(obj);
      document.getElementById("demo").innerHTML = obj[0].body;
      
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments?id=1", true);
  xhttp.send();
}
</script>

// console.log(obj); -> joga o resultado para o console do navegador // F12 abre o console do navegador.

</body>
</html>