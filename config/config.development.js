const config = {
    debug: {
        level: 'debug',
        available: true,
    },
    db: {
        username: "",
        password: "",
        database: "checkin_api",
        host: null,
        port: null,
        dialect: "sqlite",
        storage: './checkin_api.sqlite',
        sync: {
            force: true,
        },
        define: {
            underscored: true,
        },
        seederStorage: "json",
        seederStoragePath: "sequelizeData.json",
        seederStorageTableName: "sequelize_data"
    }
};

module.exports = config;