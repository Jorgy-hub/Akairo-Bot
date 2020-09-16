const { Command } = require('discord-akairo');
const figlet = require('figlet');

    class AsciiArtCommand extends Command {
        constructor() {
            super('ascii', {
                aliases: ['ascii', 'ascii-art'],
                category: 'Miscellaneous',
                args: [{ 
                    id: 'one', type: 'string', match: 'content', default: null, 
                        prompt: {
                            start: `Please provide some art to draw`,
                            retry: `Please provide some art to draw`,    
                        } 
                }],
                description: {
                    usage: 'ascii [ phrase ]',
                    examples: ['ascii Hello, world!'],
                    description: 'Displays ascii art'
                },
                cooldown: 6000,
                ratelimit: 2
            });
        }

        exec(message, args) {
                figlet(args.one, function(err, data) {
                    if(err) return message.util.send('Something went wrong!');

                        return message.util.send(`\`\`\`\n${data}\`\`\``);
            })
        }
    }

module.exports = AsciiArtCommand;
