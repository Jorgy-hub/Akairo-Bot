const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

    class PurgeCommand extends Command {
        constructor() {
            super('purge', {
                aliases: ['purge', 'del', 'bulkdelete'],
                category: 'Moderation',
                args: [{ 
                    id: 'purge', type: 'number', default: null, 
                        prompt: {
                            start: `Please provide an amount of messages from 1-100 to delete.`,
                            retry: `Please provide an amount of messages from 1-100 to delete.`,    
                        } 
                }],
                description: {
                    usage: 'purge [ amount ]',
                    examples: ['purge 2', 'purge 100'],
                    description: 'Deletes certain messages from the channel.'
                },
                cooldown: 6000,
                ratelimit: 2,
                userPermissions: ['MANAGE_MESSAGES'],
                clientPermissions: ['MANAGE_MESSAGES']
            })
        }

        async exec(message, args) {
            if(args.purge < 1 || args.purge > 100) return message.util.send('Please provide a number greater than 0 and no more than 100.');
        const deleted = await message.channel.messages.fetch({ limit: args.purge });
            await message.delete() && message.channel.bulkDelete(deleted);

        return message.util.send(
            new MessageEmbed()
                .setColor(this.client.colors['defaultColor'])
                .setDescription(`${this.client.emojis.get('660343594477027330')} Deleted: \`${deleted.size}/${args.purge}\` messages successfully`))
            .then(m => m.delete({ timeout: 15000 }))
        }
    }

module.exports = PurgeCommand;