const { Structures } = require('discord.js');

    module.exports = Structures.extend("Message", Message => class extends Message {
        async suppessEmbed(hide) {
            this.client.api.channels[this.channel.id].messages[this.id]['suppress-embeds'].post({
                headers: { 
                    "Content-Type": "raw"
                },
                data: {
                    suppress: hide
                }
            });
        }
    });