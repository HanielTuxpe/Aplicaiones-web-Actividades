var psswd, count = 0;

var form = document.getElementById("frmlogin").addEventListener("submit", function(evento){
    
    var psswrd = document.getElementById("psswd1").value;
    var psswd = document.getElementById("psswdcon").value;
    
    if (psswrd == psswd) {
        alert("ok");
    }
    else{
        alert("passwords no coinciden");
        evento.preventDefault();
    }
});
