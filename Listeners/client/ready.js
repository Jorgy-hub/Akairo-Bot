const { Listener } = require('discord-akairo');
//const { PlayerManager } = require('discord.js-lavalink'); 
//const { nodes } = require('../Util/config');

    class ReadyListener extends Listener {
        constructor() {
            super('ready', {
                emitter: 'client',
                event: 'ready'
            })
        }

        async exec() {

               /* this.client.player = new PlayerManager(this.client, nodes, {
                    user: this.client.user.id,
                    shards: this.client.shard ? this.client.shard.count : 0
                }) */

            let statuses = [
                `p!help | ${this.client.users.cache.size} users`,
                `p!help | ${this.client.guilds.cache.size} guilds`,
                `p!help | ${this.client.channels.cache.size} channels`
            ], i = 0;

                this.client.user.setStatus('dnd');
                this.client.user.setActivity(statuses[i++ % statuses.length], { type: 'PLAYING' });

            console.log(`${this.client.user.tag} has booted into the Discord world.`);

        }
    }

module.exports = ReadyListener;
