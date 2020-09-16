const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

    class AvatarCommand extends Command {
        constructor() {
            super('avatar', {
                aliases: ['avatar', 'av', 'pfp'],
                category: 'Miscellaneous',
                args: [{ 
                    id: 'member', type: 'member', default: _ => _.member
                }],
                description: {
                    usage: 'avatar < @Mention | id | username >',
                    examples: ['avatar @host', 'avatar 123456789012345678', 'avatar host'],
                    description: 'Display\'s a users avatar'
                },
                category: 'Miscellaneous',
                cooldown: 3000,
                ratelimit: 3
            })
        }

        exec(message, { member }) {
        const embed = new MessageEmbed()
            .setColor(this.client.colors['defaultColor'])
            .setTitle(`${member.id === message.author.id ? 'Your' : `${member.user.tag}'s`} Profile Picture`)
            .setURL(member.user.displayAvatarURL())
            .setImage(member.user.displayAvatarURL({ size: 2048 }))

        return message.util.send({ embed });
        }
    }

module.exports = AvatarCommand;