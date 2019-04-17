



var config = {
    apiKey: "AIzaSyDW-giKcDGNPq64aY9uucFT-UXu89Vl_ZE",
    authDomain: "wallpaperapp-8bf86.firebaseapp.com",
    databaseURL: "https://wallpaperapp-8bf86.firebaseio.com",
    projectId: "wallpaperapp-8bf86",
    storageBucket: "wallpaperapp-8bf86.appspot.com",
    messagingSenderId: "982399500056"
  };
  firebase.initializeApp(config);
 
  firebase.auth.Auth.Persistence.LOCAL; 

   $("#btn-login").click(function(){

    var email= $ ("#email").val();
    var password= $ ("#password").val();
     
  var result= firebase.auth().signInWithEmailAndPassword(email,password);
  result.catch(function(error){
      var errorcode=error.code;
      var errorMessage=error.message;

      console.log(errorcode);
      console.log(errorMessage);
  });   
});

$("#btn-logout").click(function(){
    firebase.auth().signOut();
});


function switchView(view){
    $.get({
        url:view,
        cache:false,

    }).then(function(data){
        $("#container").html(data);
    })
}