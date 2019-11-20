// MAIN AJAX FUNCTION
function sendData(data, url, reqURL, type){
    console.log("senddata: ", data);
    $.ajax({
        type:type,
        dataType:"json",
        url: url,
        data: data,
        success: function(data) {
            console.log(data);
            window.location.replace(reqURL);            
            if(data.sessionId){
                sessionStorage.setItem('session', data.sessionId);
            }else{
                console.log("no session");
            }
        },
        error: function(data) {
            console.log(data, "failed");
        },
    });
}

// LOGIN FUNCTIONS
function login(){            
    console.log("login clicked");
    var url = "http://127.0.0.1:8887/loginResponse.json";
    var reqURL = "index.html";
    var type = "get";

    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;
    var clientId = "123331abvddd5"

    var data = '{"phone":' + phone +', "pass":'+ pass + ', "clientId":"'+clientId+'"}';
    sendData(data, url, reqURL, type);
}

// SIGN UP FUNCTIONS 
function signup(){            
    console.log("login clicked");
    var url = "http://127.0.0.1:8887/signupResponse.json";
    var reqURL = "login.html";
    var type = "get";
    var phone = document.getElementById("phone").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var conf_pass = document.getElementById("conf_password").value;
    var clientId = "123331abvddd5";

    var checkPass = checkPassword(pass,conf_pass);
    if (checkPass == true){
        var data = jsonData(phone, name, email, pass, conf_pass,clientId);
        sendData(data, url, reqURL, type);
    }else{
        alert(checkPass);
    }
}
// HELPER FUNCTION
// jsondata converter
function jsonData(phone, name, email, pass, conf_pass, clientId){
    var data = '{"phone": "' + phone + '","name": "' + name.toString() + '","email":"' + email.toString() + '","pass":' + pass + ',"conf_pass":' + conf_pass + ',"clientId":"'+clientId.toString()+'"}';
    return data;
}

// password checker
function checkPassword(pass1, pass2){
    if(pass1 == pass2){
        return true;
    }else{
        return false;
    }
}
