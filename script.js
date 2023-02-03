function add_user(){
    user_name = document.getElementById("Username").value;
console.log("user added")
    localStorage.setItem("user_name" , user_name);
}

function home(){
    window.location = "index.html";
}

function QandA(){
    window.location = "QandA.html";
}

function Maps(){
    window.location = "Map.html";
}

function Post(){
    window.location = "Post.html";
}

function update(){
window.location = "update.html";
}