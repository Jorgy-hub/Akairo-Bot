const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

    class UserinfoCommand extends Command {
        constructor() {
            super('userinfo', {
                aliases: ['userinfo', 'user', 'whois'],
                category: 'Miscellaneous',
                args: [{ 
                    id: 'member', type: 'member', default: _ => _.member
                }],
                description: {
                    usage: 'userinfo < @Mention | id | username >',
                    examples: ['userinfo @host', 'userinfo 123456789012345678', 'userinfo host'],
                    description: 'Display\'s user information'
                },
                category: 'Miscellaneous',
                cooldown: 3000,
                ratelimit: 3
            });
        }

        async exec(message) {
            
            let target = message.mentions.users.first() || message.author;
            
             let uEmbed = new MessageEmbed()
               .setColor(0xC76CF5)
                .setTitle("User Info")
                .setThumbnail(message.guild.iconURL({ format: 'jpg' }))
                .setAuthor(`${target.username} Info`, target.displayAvatarURL({ format: 'jpg' }))
                .addField("**Username:**", `${target.username}`, true)
                .addField("**Discriminator:**", `${target.discriminator}`, true)
                .addField("**ID:**", `${target.id}`, true)
                .addField("**Status:**", `${target.presence.status}`, true)
                .addField("**Created At:**", `${target.createdAt}`, true)
                .addField("\u200b", `\u200b`, true)
                .setFooter(`PixelBot | Have a nice day!`);

            message.channel.send(uEmbed);
          
        }
    }

module.exports = UserinfoCommand;
