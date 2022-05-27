
var firebaseConfig = {
    apiKey: "AIzaSyBQkSfgIOeM_H7AYKbrhxfdPT53UX8e4gg",
    authDomain: "twitterbutbad.firebaseapp.com",
    databaseURL: "https://twitterbutbad-default-rtdb.firebaseio.com",
    projectId: "twitterbutbad",
    storageBucket: "twitterbutbad.appspot.com",
    messagingSenderId: "1088956868083",
    appId: "1:1088956868083:web:dc8db3e82453c1cf2dde86"
  };
  firebase.initializeApp(firebaseConfig);

  function adduser(){
var user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding the user"
});
  }