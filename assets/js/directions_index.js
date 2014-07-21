$(document).ready(function(){
	$('form').submit(function(){
		$.post($(this).attr('action'),
			$(this).serialize(),
			function(data){
				if(data['status'] == "NOT_FOUND") {
					$('#directions_wrapper').html(
						"<div class='row'>"+
							"<div class='col-sm-12'>"+
								"<h1>Please type in valid addresses.</h1>"+
							"</div>"+
						"</div>"
						);
				} else {
					console.log(data['routes'][0]['legs'][0]['distance']['text']);
					var steps = '';
					for (var x = 0; x < (data['routes'][0]['legs'][0]['steps']).length; x++) {
						steps+= "<div class='row'>"+
									"<div class='col-sm-12'>"+
										"<p>"+(x+1)+". "+(data['routes'][0]['legs'][0]['steps'][x]['html_instructions'])+"</p>"+
									"</div>"+
								"</div>";
					};
					$('#directions_wrapper').html(
						"<div class='row'>"+
							"<div class='col-sm-12'>"+
								"<h1>Directions from "+data['routes'][0]['legs'][0]['start_address']+" to "+ data['routes'][0]['legs'][0]['end_address']+"</h1>"+
							"</div>"+
						"</div>"+
						"<div class='row'>"+
							"<div class='col-sm-12'>"+
								"<h4>Total distance is: "+data['routes'][0]['legs'][0]['distance']['text']+"</h4>"+
							"</div>"+
						"</div>"+
						"<div class='row'>"+
							"<div class='col-sm-12'>"+
								"<h4>This trip will take: "+data['routes'][0]['legs'][0]['duration']['text']+"</h4>"+
							"</div>"+
						"</div>"+
						steps
						);
				};
			}, 'json');
		return false;
	})
});