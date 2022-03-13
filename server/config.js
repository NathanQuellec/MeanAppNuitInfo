const config = {
    app: {
        port: 3000
    },
    mongo: {
        host: "localhost",
        port: 27017,
        name: "db",
        uri: "mongodb://database:27017/app"
    },
    flask: {
        host:"localhost",
        port: 5000,
        uri: "http://127.0.0.1:5000/"
    }
};

module.exports = config;