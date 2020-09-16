const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

    class PingCommand extends Command {
        constructor() {
            super('ping', {
                aliases: ['ping', 'latency'],
                category: 'Miscellaneous',
                description: {
                    usage: 'ping',
                    examples: ['ping'],
                    description: 'Pong! Display\'s the bots latency'
                },
                cooldown: 2000,
                ratelimit: 3
            })
        }

        async exec(message) {
            const embed = new MessageEmbed();
            const sent = await message.util.send('Pinging...');
            const timeDifference = (sent.editedAt || sent.createdAt) - (message.editedAt || message.createdAt);

                return message.util.send(
                new MessageEmbed()
                    .setColor(this.client.colors['defaultColor'])
                    .setDescription(`**Response**: \`${timeDifference}MS\`
                    **Latency**: \`${Math.round(this.client.ws.ping)}MS\``)
                );

        }
    }

module.exports = PingCommand;