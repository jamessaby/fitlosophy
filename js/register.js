firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = "./index.html";
        } else {
            // No user is signed in.
        }
    });



function register() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var userPassRetype = document.getElementById("password_retype_field").value;
    var userFName = document.getElementById("fname").value;
    var userLName = document.getElementById("lname").value;

    if (!userEmail && !userPass) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, UserName/Email and Password fields are empty!";
    } else if (!userPass) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, empty password!";
    } else if (!userEmail) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, empty UserName/Email";
    } else if (userPass !== userPassRetype) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = "Sorry, password fields do not match! Please retype the password in both fields";
    } else {
        createUser(userEmail,userFName,userLName);
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                document.getElementById("message").style.color = 'red';
                document.getElementById("message").innerHTML = "Sorry, you entered a wrong password!";
            } else if (errorCode === 'auth/invalid-email') {
                document.getElementById("message").style.color = 'red';
                document.getElementById("message").innerHTML = "Sorry, you entered a wrong UserName/email!";
            } else if (errorCode === 'auth/email-already-in-use') {
                document.getElementById("message").style.color = 'red';
                document.getElementById("message").innerHTML = "Sorry, email address you entered already in use!";
            }
            console.log(error);
            // ...
        });
    }
}