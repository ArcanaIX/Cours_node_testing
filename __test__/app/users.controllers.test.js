const request = require("supertest");
const app = require("../../app");

describe("UsersControllers test Suite", function () {
	describe("GET /users", function () {
		it("should send a 200 HTTP response", async function () {
			await request(app)
				.get("/users")
				.expect(200)
				.then((response) => {
					//response
				});
		});

		it("should respond a JSON response", async function () {
			await request(app).get("/users").expect("Content-Type", /json/);
		});

		it("Should respond a body as : {message: 'user'}", async () => {
			await request(app).get("/users").then((response) => {
                expect(response.body).toEqual({message: 'users'});
            })
		});
	});
});
