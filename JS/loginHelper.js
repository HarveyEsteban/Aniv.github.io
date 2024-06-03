function process(){
    var Uname = document.getElementById("userName").value;
    var Upass = document.getElementById("password").value;

    let username = "Crizsabel28";
    let password = "052804";

    if(Uname == "" || Upass == ""){
        alert("Please enter your username and password ");
        return false;
    }
    else{
        if(Uname == username && Upass == password){
            window.location.href = "main.html";
            return false;
        }else{
            alert("wrong username or password. Please try again.");
     
        }
    }



}