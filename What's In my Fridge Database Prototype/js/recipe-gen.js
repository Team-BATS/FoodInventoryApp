function getrecipedata(){
	var database = firebase.database();
	var listRef = database.ref('users/' + uid + '/Pantry');
	listRef.on('value', function(snapshot){
		createRecipe(snapshot.val());
	});
}

function createRecipe(snapshot){
	//find food with largest quantity
	var most_quant = 0;
	var food_to_look;

	for(var key in snapshot){
		var cur_food = snapshot[key].food_quantity;
		if(most_quant < cur_food){
			most_quant = cur_food;
			food_to_look = snapshot[key].food_name;
		}
	}

	var foodurl = "https://api.edamam.com/search?q=" + food_to_look +"&app_id=$d08b57ab&app_key=$6e076c80075f58f77edb2eae8020481d"
	/*
	$.ajax({
		url: foodurl,
		type: 'get',
		data:{x

		},
		success: function(data){
			buildrecipe(data);
		}
	});*/

	window.location.href = "https://api.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken";
}