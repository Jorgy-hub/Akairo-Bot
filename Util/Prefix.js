const sqlite = require('sqlite');
const sequelize = require('sequelize');

const { AkairoClient, SQLiteProvider, SequelizeProvider } = require('discord-akairo');

class CustomClient extends AkairoClient {
    constructor() {
        super({
            /* Options here */
        });

        // With SQLite
        this.settings = new SQLiteProvider(sqlite.open('path/to/db.sqlite'), 'table_name', {
            idColumn: 'guild_id',
            dataColumn: 'settings'
        });

    }
}
