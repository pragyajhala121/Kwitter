
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC5Cpe2wLs2mJyZeAfEMr8ZV9vpyyb_czk",
      authDomain: "kwitter-50aae.firebaseapp.com",
      databaseURL: "https://kwitter-50aae-default-rtdb.firebaseio.com",
      projectId: "kwitter-50aae",
      storageBucket: "kwitter-50aae.appspot.com",
      messagingSenderId: "888540658985",
      appId: "1:888540658985:web:94f8af8411bf5de6144b38"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name;
    
    function addRoom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose : "add room name"
         });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room_name - " + Room_names);
        row = "<div class= 'room_name' id= "+Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +" </div> <hr> ";
        document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}