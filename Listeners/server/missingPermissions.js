const { Listener } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

    class MissingPermissionsListener extends Listener {
        constructor() {
            super('missingPermissions', {
                emitter: 'commandHandler',
                event: 'missingPermissions'
            })
        }

        exec(message, command, type, missing) {
            if(type == 'client') {
            let result = missingPermissions(message.guild.me, missing);
            const embed = new MessageEmbed()
                .setColor(this.client.colors['red'])
                .setDescription(`${this.client.emojis.get('660343595626397699')} I do not have the following permission(s): \`${result}\` for the command: \`${command}\`. Command execution has halted.`)
            return message.channel.send({ embed });
            } else if(type == 'user') {
            let result = missingPermissions(message.member, missing);
            const embed = new MessageEmbed()
                .setColor(this.client.colors['red'])
                .setDescription(`${this.client.emojis.get('660343595626397699')} You do not have the following permission(s): \`${result}\` for the command: \`${command}\`. Command execution has halted.`)
            return message.channel.send({ embed });
            }
        }
    }

    const missingPermissions = (usr, permissions) => {
        const missingPermissions = usr.permissions.missing(permissions)
          .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``); 
        
            return missingPermissions.length > 1 ?
              `${missingPermissions.slice(0, -1).join(', ')} and ${missingPermissions.slice(-1)[0]}` : 
            missingPermissions[0];
      }

module.exports = MissingPermissionsListener;