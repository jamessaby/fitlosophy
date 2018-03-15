firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("signin").style.display = 'none';
        document.getElementById("userName").innerHTML = getUserName();
        document.getElementById("loggedin").style.display = 'block';
        //getUserName(user);
    } else {
        document.getElementById("signin").style.display = 'block';
        document.getElementById("loggedin").style.display = 'none';
    }
});



function logout() {
    firebase.auth().signOut().then(function () {
        window.alert("logout success!");
    }).catch(function (error) {
        window.alert("logout failed!");
    });
}
