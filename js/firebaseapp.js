// Initialize Firebase
var config = {
    apiKey: "AIzaSyBsHBg5aZgS0WoT27qlpHvCgOcMpUhdAkU",
    authDomain: "fitlosophy-90d64.firebaseapp.com",
    databaseURL: "https://fitlosophy-90d64.firebaseio.com",
    projectId: "fitlosophy-90d64",
    storageBucket: "fitlosophy-90d64.appspot.com",
    messagingSenderId: "381279691597"
};
firebase.initializeApp(config);
const db = firebase.firestore();

function createUser(email,fname,lname) {
    // Initialize Cloud Firestore through Firebase
    var newUserData = {
      fname: fname,
      lname: lname
    };
    db.collection("users").doc(email).set(newUserData).then(function () {
        console.log("Document written successfully");
    }).catch(function (error) {
        console.log("error writing document: ", error);
    });
}
function getUserName() {
    var user = firebase.auth().currentUser;
    var docRef = db.collection("users").doc(user.email);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            document.getElementById("userName").innerHTML = "Hi " + doc.data().fname;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}