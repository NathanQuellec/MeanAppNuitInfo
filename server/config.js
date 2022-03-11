const config = {
    app: {
        port: 3000
    },
    mongo: {
        host: "localhost",
        port: 27017,
        name: "db",
        uri: "mongodb://database:27017/app"
    }
};

module.exports = config;