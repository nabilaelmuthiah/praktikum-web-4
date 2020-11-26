let acc = {
    user : "nabilaelmuthiah",
    pass : "nurulfikri"
};

function login() {
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value; 

    if(username == acc.user && password == acc.pass){
        alert(username + " is logged in.");
        return true;
    }
    else{
        alert("Incorrect username or password");
        return false;
    }
}