firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "./index.html";
        document.getElementsByClassName("list-inline-item login float-right").style.display = 'none';
        //document.getElementsByClassName("list-inline-item dropdown shop-card float-right").style.display = 'show';
    } else {
        // No user is signed in.
    }
});

function register() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var userFName = document.getElementById("password_field").value;
    var userLName = document.getElementById("password_field").value;


    if (!userEmail && !userPass) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, UserName/Email and Password fields are empty!";
    } else if (!userPass) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, empty password!";
    } else if (!userEmail) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, empty UserName/Email";
    } else {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                document.getElementById("message").style.color = 'red';
                document.getElementById("message").innerHTML = "Sorry, you entered a wrong password!";
            } else if (errorCode === 'auth/invalid-email') {
                document.getElementById("message").style.color = 'red';
                document.getElementById("message").innerHTML = "Sorry, you entered a wrong UserName/email!";
            }
            console.log(error);
            // ...
        });
    }
}