function new_post(){
    username = localStorage.getItem("user_name");
    console.log(username);
    var post_text = document.getElementById("post").value;
    var post_html = " <p><b>"+username+"</b></p> <p>"+post_text+" </p> <hr> <br>";
    document.getElementById("post_space").innerHTML += post_html;
    console.log("post recived");
    console.log(post_html);
}

function explain(){
    window.alert("this is a mockup and I don't know how to code this")
}

 function home(){
    window.location = "index.html"
}

function QandA(){
    window.location = "QandA.html"
}

function Maps(){
    window.location = "Map.html"
}

function Post(){
    window.location = "Post.html"
}

function update(){
    window.location = "update.html";
 }