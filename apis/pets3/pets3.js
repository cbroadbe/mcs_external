/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.get('/mobile/custom/pets3/vets', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [
					  {
					  	"vetId": "blueRidge",
					  	"name": "Blue Ridge Vet",
					  	"address": "Purcellville VA"
					  },
					  {
					    "vetId": "piedmont",
					    "name": "Piedmont Equine Small Animal Clinic",
					    "address": "Marshall VA"
					  }
					];
			}
		}
		res.send(statusCode, result);
	});

	service.post('/mobile/custom/pets3/pets', function(req,res) {
		var result = {};
		var statusCode = 201;
		if (statusCode == 201){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					  "id": "3",
					  "name": "Oreo",
					  "species": "Cat",
					  "breed": "Domestic Short Hair",
					  "age": "14",
					  "vetId": "blueRidge"
					};
			}
		}
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/pets3/pets', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [
					  {
					    "id": "1",
					    "name": "Sophie",
					    "species": "Dog",
					    "breed": "Golden Retriever",
					    "age": "14",
					    "vetId": "piedmont"
					  },
					  {
					    "id": "2",
					    "name": "Cookie",
					    "species": "Cat",
					    "breed": "Domestic Short Hair",
					    "age": "14",
					    "vetId": "blueRidge"
					  }
					];
			}
		}
		res.send(statusCode, result);
	});

	service.get('/mobile/custom/pets3/pets/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					  "id": "1",
					  "name": "Sophie",
					  "species": "Dog",
					  "breed": "Golden Retriever",
					  "age": "14",
					  "vetId": "piedmont"
					};
			}
		}
		res.send(statusCode, result);
	});

	service.delete('/mobile/custom/pets3/pets/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					  "id": "1",
					  "name": "Sophie",
					  "species": "Dog",
					  "breed": "Golden Retriever",
					  "age": "14",
					  "vetId": "blueRidge"
					};
			}
		}
		res.send(statusCode, result);
	});

	service.patch('/mobile/custom/pets3/pets/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

	service.put('/mobile/custom/pets3/pets/:id', function(req,res) {
		var result = {};
		var statusCode = 200;
		res.send(statusCode, result);
	});

};
