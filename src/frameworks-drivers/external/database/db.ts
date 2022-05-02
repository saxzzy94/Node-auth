import knex from "knex";
export default knex({
	client: "mysql",

	connection: {
		host: "us-cdbr-east-05.cleardb.net",
		user: "b17f6f7b62e25c",
		password: "d3781b56",
		database: "heroku_eddefd42c73699f",
	},
});
