 var firebaseConfig = {
    apiKey: "AIzaSyCsAxYkJ5MTnryBa4MQfZYXY5mv-TGiUIE",
    authDomain: "kwitter-project-f7b49.firebaseapp.com",
    databaseURL: "https://kwitter-project-f7b49-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f7b49",
    storageBucket: "kwitter-project-f7b49.appspot.com",
    messagingSenderId: "371961483723",
    appId: "1:371961483723:web:b5bb12d7efa01f2c03e64e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

