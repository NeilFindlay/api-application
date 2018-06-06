/*
 * Just stubbing out Express.js classes for mock tests
 */

class Request {
	constructor() {

	}

	setQuery(query) {
		this.query = query;
	}

	setParams(params) {
		this.params = params;
	}

	setBody(body) {
		this.body = body;
	}
}

class Response {
	status(httpCode) {
		this.httpCode = httpCode;
		return this;
	}

	send(response) {
		this.response = response;
	}
}

module.exports.Request = Request;
module.exports.Response = Response;