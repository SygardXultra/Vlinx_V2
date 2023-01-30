
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB3IzhqFKivBmrnM6DXYPgtdcWk7mtmlOY",
      authDomain: "kwitter-5290f.firebaseapp.com",
      databaseURL: "https://kwitter-5290f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5290f",
      storageBucket: "kwitter-5290f.appspot.com",
      messagingSenderId: "332363895899",
      appId: "1:332363895899:web:e559c733993175c7c85b7e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
