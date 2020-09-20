// Seeting the connections strings: development and production

module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'DB_API_PRAIAGRANDE',
            dialect: 'mysql',
            user: 'root',
            password: 'root'
        }

    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
};