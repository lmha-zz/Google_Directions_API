<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Google Directions API</title>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="/assets/js/directions_index.js"></script>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="page-header">
				<h1>Google Directions API</h1>
				<p>Get directions!!</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<form class="form-inline" role="form" action="/directions/direction" method="post">
					<label for="origin">From:</label>
					<input type="text" name="origin" id="origin" placeholder="Starting Point" required>
					<label for="destination">To:</label>
					<input type="text" name="destination" id="destination" placeholder="Destination" required>
					<input class="btn btn-success" type="submit" name="action" value="Get Directions!">
				</form>
			</div>
		</div>
		<div class="row">
			<div id="directions_wrapper" class="col-sm-12"></div>
		</div>
	</div>
</body>
</html>