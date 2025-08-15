function addUser(){
    var userArray = [];
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;

    var userObj = {username,email,password,address};
    userArray = JSON.parse(localStorage.getItem("data"));

    if(!userArray){
        localStorage.setItem("data",JSON.stringify([...(userArray||[]),userObj]));
        alert("Data Inserted Successfully");
    }else{
        var res = userArray.find((obj)=>{
            return obj.email==userObj.email;
        });
        // console.log("object : ",res);
        if(res)
            alert("Email Id already Exist");
        else{
            localStorage.setItem("data",JSON.stringify([...(userArray||[]),userObj]));
            alert("Data Inserted Successfully");
        }
    }
}

function checkLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userArray = JSON.parse(localStorage.getItem("data"));
    var res = userArray.find((obj)=>{
        return obj.email==email && obj.password==password;
    });
    if(res){
        alert("Login Successfull");
        window.location.href="file:///D:/desktop/CodingThinker/webDesigning7pm/JavaScript/17%20Localstorage/profile.html";
    }
    else{
        alert("Error while Login");
        window.location.reload();
    }

}