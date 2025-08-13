function addUser(){
    var userArray = [];
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;

    var userObj = {username,email,password,address};
    userArray.push(userObj);
    console.log("userArray : ",userArray);
    localStorage.setItem("data",JSON.stringify(userArray));
    
}