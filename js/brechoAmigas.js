function save(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    
    firebase.database().ref().set({
        username: nome,
        email: email,
        msg:MessageChannel
    });
}