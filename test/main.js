var assert 		= require('assert');
var mock		= require('./classes.js');
var application = require('../routes/index.js');

describe('GET /users/1', function() {
	let res = new mock.Response();
	let req = new mock.Request();

	req.setQuery({id: 1});
	req.setParams({resource: ['users']});

	application.get(req, res, {});
	
	it('Response code equals 200', function() {
		assert.equal(200, res.httpCode);
	});
	it('Response contains id field', function() {
		assert.equal(true, 'id' in res.response.data);
	});
	it('Response contains first_name field', function() {
		assert.equal(true, 'first_name' in res.response.data);
	});
	it('Response contains last_name field', function() {
		assert.equal(true, 'last_name' in res.response.data);
	});
	it('Response contains avatar field', function() {
		assert.equal(true, 'avatar' in res.response.data);
	});
});


describe('GET /users/NaN', function() {
	let res = new mock.Response();
	let req = new mock.Request();

	req.setQuery({id: 'NaN'});
	req.setParams({resource: ['users']});

	application.get(req, res, {});

	it('Response code equals 404', function() {
		assert.equal(404, res.httpCode);
	});
});


describe('POST /users/', function() {
	let res = new mock.Response();
	let req = new mock.Request();

	req.setBody({});
	req.setParams({resource: ['users']});

	application.post(req, res, {});

	it('Response code equals 201', function() {
		assert.equal(201, res.httpCode);
	});
	it('Response contains id field', function() {
		assert.equal(true, 'id' in res.response);
	});
	it('Response contains createdAt field', function() {
		assert.equal(true, 'createdAt' in res.response);
	});
});

describe('PUT /users/1', function() {
	let res = new mock.Response();
	let req = new mock.Request();

	req.setBody({id: 1});
	req.setParams({resource: ['users']});

	application.put(req, res, {});

	it('Response code equals 200', function() {
		assert.equal(200, res.httpCode);
	});
	it('Response contains id field', function() {
		assert.equal(true, 'id' in res.response);
	});
	it('Response contains updatedAt field', function() {
		assert.equal(true, 'updatedAt' in res.response);
	});
});

describe('PATCH /users/1', function() {
	let res = new mock.Response();
	let req = new mock.Request();

	req.setBody({id: 1});
	req.setParams({resource: ['users']});

	application.patch(req, res, {});

	it('Response code equals 200', function() {
		assert.equal(200, res.httpCode);
	});
	it('Response contains id field', function() {
		assert.equal(true, 'id' in res.response);
	});
	it('Response contains updatedAt field', function() {
		assert.equal(true, 'updatedAt' in res.response);
	});
});

describe('DELETE /users/1', function() {
	let res = new mock.Response();
	let req = new mock.Request();

	req.setBody({id: 1});
	req.setParams({resource: ['users']});

	application.delete(req, res, {});

	it('Response code equals 204', function() {
		assert.equal(204, res.httpCode);
	});
});
