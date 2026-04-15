//The is a OOP for the information of a new account//
class creator{
    constructor(name,email,pass){
        this.name = name;
        this.email = email;
        this.pass = pass;
    }

    printa(){
        console.log(this.name)
    }

//The function just clean the Value of input and change the Info of placeholder//
}
function clean(){
    document.getElementById("name").style.background =  "rgb(236, 127, 255)";
    document.getElementById("name").placeholder = "Write an Id name";
    document.getElementById("email").style.background =  "rgb(236, 127, 255)";
    document.getElementById("email").placeholder = "Write your Email";
    document.getElementById("password").style.background =  "rgb(236, 127, 255)";
    document.getElementById("password").placeholder = "Write your Password";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("creattext").classList.add("hidden");
}

//The function go to check in Databank, if have a account created with the give information//

function valid_of_date_bank(variable){
    console.log("entrou");
    for (i=0; i < Date_json.length; i++){
        for (k=0; k<3;k++){
            const user_bank = Date_json[i];
            console.log(variable, user_bank);
            if (user_bank.name === variable){
                console.log("nome ja existe");
                return true;
            }
        }
    }
    return false;
}


//var list that will be my date bank // 
const Date_json = JSON.parse(localStorage.getItem("bank_date")) || [] ;
//A var that can be possibel to play the game. The player need to do loggin to take the true_key. you can finde in loggin.js the true_key//
var key_to_play = false;
//creat account //
document.getElementById('Create').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

// The methote just close the display of created account//
document.getElementById("closebutton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    clean()
})

//Var with the information of input, later call the function of check and//
//change the the placeholder if something is wrong
document.getElementById("Creatbutton").addEventListener("click", function(){
    const date_name = document.getElementById("name").value;
    const date_email = document.getElementById("email").value;
    const date_password = document.getElementById("password").value;
    
    function validemail(email){
        return email.includes("@");
    }

    if (date_name === "" || valid_of_date_bank(date_name)) {
        clean();
    
        document.getElementById("name").style.background = "red";
        document.getElementById("name").placeholder = "Name not valid";
        
    } else if (date_email ==="" || (Date_json.includes(date_email))) {
        clean()
        document.getElementById("email").style.background = "red";
        document.getElementById("email").placeholder = "Email no valid";
    } else if (date_password ==="" || date_password.length < 8 ) {
        clean()
        document.getElementById("password").style.background = "red";
        document.getElementById("password").placeholder = "password not valid";
        var id_of_animation = document.getElementById("popup_password");
        id_of_animation.style.display = "flex";
        setTimeout(function() {
            id_of_animation.style.display = 'none';
        }, 2000);
    } else {
        pushofbank= new creator(date_name,date_email,date_password);
        Date_json.push(pushofbank);
        localStorage.setItem('dados', JSON.stringify(Date_json));
        document.getElementById("creattext").classList.remove("hidden");
    }
})

//here is just a small program for the animation of play, if the player try to play without loggin//

document.getElementById("startplay").addEventListener("click", () => {
    var id_of_animation = document.getElementById("popup_info_login");
    console.log("join in the click") ;
    if (key_to_play === false ){
        console.log("all key work on the click, true");
        id_of_animation.style.display = "flex";
        setTimeout(function() {
            id_of_animation.style.display = 'none';
        }, 2000);
}})