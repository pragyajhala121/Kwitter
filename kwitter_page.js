//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;

          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
                like : 0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1 = message_data['name'];
      message =  message_data['message'];
      like = message_data['like'];
      name_with_tag= "<h4>"+name1+"<img src = 'tick.png' class='user_tick'></h4>";
      message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike() {
      console.log("clicked on button " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firbase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}