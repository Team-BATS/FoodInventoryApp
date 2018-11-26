var uid = 0;

firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
	    // User is signed in.

		document.getElementById("user_div").style.display = "block";
		document.getElementById("user_menu").style.display = "block";
		document.getElementById("login_div").style.display = "none";
		document.getElementById("edit_div").style.display = "none";
		

	    var displayName = user.displayName;
	    var email = user.email;
	    var emailVerified = user.emailVerified;
	    var photoURL = user.photoURL;
	    var isAnonymous = user.isAnonymous;
	    uid = user.uid;
	    var providerData = user.providerData;

	    if(user != null){

	      	var email_id = user.email;
	      	document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

	    }
  } else {
    	document.getElementById("user_div").style.display = "none";
    	document.getElementById("user_menu").style.display = "none";
    	document.getElementById("edit_div").style.display = "none";
   		document.getElementById("login_div").style.display = "block";
  }
});



function login(){

  userEmail = document.getElementById("email").value;
  userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function viewlist(){
	document.getElementById("user_menu").style.display = "none";
	document.getElementById("itemList").style.display = "block";
	//create references
	var database = firebase.database();
	var listRef = database.ref('users/' + uid + '/Pantry');
	listRef.on('value', function(snapshot){
		updateList(snapshot.val());
	});
}

function updateList(snapshot){
	var foodList = document.getElementById("food_object_list");
	while(foodList.firstChild){
		foodList.removeChild(foodList.firstChild);
	}
	for(var key in snapshot){
		var food = document.createElement("li");
		food.appendChild(document.createTextNode(snapshot[key].food_name + ": " + snapshot[key].food_quantity));
		foodList.appendChild(food);
	}
}

function editlist(){
	document.getElementById("user_menu").style.display = "none";
	document.getElementById("edit_div").style.display = "block";
}

function backtomain(){
	document.getElementById("edit_div").style.display = "none";
	document.getElementById("additemform").style.display = "none";
	document.getElementById("itemList").style.display = "none";
	document.getElementById("user_menu").style.display = "block";
}

function additem(){
	document.getElementById("additemform").style.display = "block";
	document.getElementById("edit_div").style.display = "none";
}

function additemToDatabase(){
	var name = document.getElementById("food-in").value;
	var quantity = document.getElementById("quan-in").value;

	firebase.database().ref('users/' + uid + '/Pantry/' + name).set({
		food_name: name,
		food_quantity: quantity
	});

	document.getElementById("additemform").style.display = "none";
	document.getElementById("itemList").style.display = "block";

}

function logout(){
  firebase.auth().signOut();
  uid = 0;
}