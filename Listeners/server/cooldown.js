const { Listener } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

    class CooldownListener extends Listener {
        constructor() {
            super('cooldown', {
                emitter: 'commandHandler',
                event: 'cooldown',
            })
        }

        exec(message, command, remaining) {
            const embed = new MessageEmbed()
                .setColor(this.client.colors['red'])
                .setDescription(`⚙️ You are on a cooldown for the command: \`${command}\`. Please wait: \`${remaining.toFixed(2) / 1000}s\``)
            return message.channel.send({ embed });
        }
    }

module.exports = CooldownListener;
