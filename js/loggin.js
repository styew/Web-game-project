//The methote go to open the loggin display on the web.//
document.getElementById("log").addEventListener("click", function(){
    document.getElementById("popup_loggin").style.display = "block"
})

// The methote go to close the loggin display on the web//
document.getElementById("loggin_close").addEventListener("click", function(){
    document.getElementById("popup_loggin").style.display = "none"
})

document.getElementById("starplay").addEventListener("click", function () {
    document.getElementById("game_frame").style.display = "block"
})

//The function go to check if the email and the password have been//
//created and check on the Databank on json.

//var Date_Json u can finde in the Doc script.js//
function check_loggin_databank(email,password){
    for (i=0; i < Date_json.length; i++){
        const user_bank = Date_json[i];
        console.log(email,password, user_bank);
        if (user_bank.email === email && user_bank.pass === password){
            console.log("loggin efetuado com sucesso");
            var user_name = user_bank.name;
            return true
        }}
}

function return_name(email){
    for (i=0; i < Date_json.length; i++){
        const user_bank = Date_json[i];
        console.log(email,password, user_bank);
        if (user_bank.email === email ){
            var user_name = user_bank.name;
            console.log("nome recuperado com sucesso",user_name);
            return user_name
        }}
}



//The function just clean the value on display of loggin//
// if something was wrong//
function clean_loggin(){
    document.getElementById("password_log").value = "";
    document.getElementById("email_log").value = ""
}

//Here just take the value and call a function, if have the information on the Datebank//
document.getElementById("access_log").addEventListener("click", function(){
    const email_loggin = document.getElementById("email_log").value;

    const password_logging = document.getElementById("password_log").value;
    console.log("entrou",(check_loggin_databank(email_loggin,password_logging)));
    if (check_loggin_databank(email_loggin,password_logging) === true){
        document.getElementById("popup_loggin").style.display = "none"
        document.getElementById("buttons").style.display = "none"
        document.getElementById("afterloggin").style.display = "flex"
        document.getElementById("name_user").textContent = "Welcome " + return_name(email_loggin);
        var key_to_play = true;
    }
    
})
