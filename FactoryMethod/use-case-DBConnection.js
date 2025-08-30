// product interface
class DBConnection {
	connect() {
		throw new Error('connect method must be implemented!')
	}

	disConnect() {
		throw new Error('disConnect method must be implemented!')
	}
}

class MySqlConnection extends DBConnection {
	connect() {
		console.log('connecting to mysql...');
		setTimeout(() => {
			console.log('connected to mySql successfully');
		}, 200)
	}

	disConnect() {
		console.log('disconnecting ...');
		setTimeout(() => {
			console.log('disconnected successfully');
		}, 200)
	}
}

class MongoDBConnection extends DBConnection {
	connect() {
		console.log('connecting to mongoDB...');
		setTimeout(() => {
			console.log('connected to mongoDB successfully');
		}, 200)
	}

	disConnect() {
		console.log('disconnecting ...');
		setTimeout(() => {
			console.log('disconnected successfully');
		}, 200)
	}
}

// factory interface
class DBFactory {
	createConnection() {
		throw new Error('createConnection method must be implement!')
	}
}

class MySqlFactory extends DBFactory{
	createConnection(){
		return new MySqlConnection();
	}
}

class MongoDBFactory extends DBFactory{
	createConnection() {
		return new MongoDBConnection();
	}
}


// client
async function clientCode(dbConnectionFactory) {
	const dbConnection = dbConnectionFactory.createConnection();
	dbConnection.connect();
}

clientCode(new MySqlFactory());